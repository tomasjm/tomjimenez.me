import Head from "next/head";
import Heading from "../components/Heading";
interface Post {
  title: string;
  description: string;
  hasCode: boolean;
}
const BlogLayout = ({
  children,
  post,
}: React.PropsWithChildren<{ post: Post }>) => {
  return (
    <>
      <Head>
        {post.hasCode && (
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
          />
        )}
        <title>{post.title}</title>
      </Head>
      <div className="">
        <Heading className="text-5xl">{post.title}</Heading>
        {post.description && <p className="description">{post.description}</p>}
      </div>
      <main className="prose dark:prose-dark max-w-screen-md">{children}</main>
    </>
  );
};
export default BlogLayout;
