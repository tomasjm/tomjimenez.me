import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import path from "path";
import { snippetsFilePaths, SNIPPETS_PATH } from "../../utils/mdx-utils";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import rehypeHighlight from "rehype-highlight";
import SnippetLayout from "../../components/SnippetLayout";
import Image from "next/image";
const components = {
  Head,
  Image: (props: any) => (
    <Image className={`${props.className} rounded-lg`} {...props} />
  ),
};

export default function SnippetPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SnippetLayout post={frontMatter}>
        <MDXRemote {...source} components={components} />
      </SnippetLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippetFilePath = path.join(SNIPPETS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(snippetFilePath);

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
  const paths = snippetsFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
