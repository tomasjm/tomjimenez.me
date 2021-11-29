import { postFilePaths, POSTS_PATH } from "../../utils/mdx-utils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LinkItem from "../../components/LinkItem";
import { InferGetStaticPropsType } from "next";
const BlogPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <LinkItem
                href={`/blog/post/${post.filePath.replace(/\.mdx?$/, "")}`}
                label={post.data.title}
              ></LinkItem>
            </li>
          ))}
        </ul>
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
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
