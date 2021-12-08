import { postFilePaths, POSTS_PATH } from "../../utils/mdx-utils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { BlogPostInfoType } from "../../lib/types";
import BlogLink from "../../components/BlogLink";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main>
        <Heading>Blog</Heading>
        <Text>
          Este es mi blog personal en donde estaré escribiendo sobre desarrollo
          informático, electrónica y opiniones en distintos temas de índole
          general.
        </Text>
        <section className="mt-14">
          <Heading>Todos los posts</Heading>
          <ul>
            {posts.map((post) => (
              <li className="mb-5" key={post.filePath}>
                <BlogLink
                  href={`/blog/post/${post.filePath.replace(/\.mdx?$/, "")}`}
                  title={post.data.title}
                  summary={post.data.summary}
                  publishedAt={post.data.publishedAt}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default BlogPage;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data: data as BlogPostInfoType,
      filePath,
    };
  });

  return { props: { posts } };
}
