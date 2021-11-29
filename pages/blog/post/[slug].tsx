import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../../utils/mdx-utils";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import rehypeHighlight from "rehype-highlight";
import BlogLayout from "../../../components/BlogLayout";
import Image from "next/image";
const components = {
  Head,
  Image: (props: any) => (
    <Image className={`${props.className} rounded-lg`} {...props} />
  ),
};

export default function PostPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <BlogLayout post={frontMatter}>
        <MDXRemote {...source} components={components} />
      </BlogLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight as any],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
