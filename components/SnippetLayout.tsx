import Head from "next/head";
import Heading from "../components/Heading";
import Text from "../components/Text";
interface Post {
  title: string;
  description: string;
  hasCode: boolean;
}
const SnippetLayout = ({
  children,
  post,
}: React.PropsWithChildren<{ post: Post }>) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
        />
        <title>{post.title}</title>
      </Head>
      <div className="">
        <Heading className="text-5xl">{post.title}</Heading>
        {post.description && <Text>{post.description}</Text>}
      </div>
      <main className="prose dark:prose-dark max-w-screen-md">{children}</main>
    </>
  );
};
export default SnippetLayout;
