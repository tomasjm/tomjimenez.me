import Button from "../../components/Button";
import Comment from "../../components/Comment";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import CommentForm from "../../components/CommentForm";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { AiOutlineLoading } from "react-icons/ai";
import Loader from "../../components/Loader";
interface UserInfo {
  id: string;
  name: string;
  email: string;
  image: string;
}
interface Comment {
  id: string;
  user: UserInfo;
  text: string;
  created_at: string;
}
const CommentsPage = () => {
  const { data: session, status } = useSession();
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [loading, setLoading] = React.useState(true);
  const fetchComments = async () => {
    setLoading(true);
    const res = await fetch("/api/comments");
    const comments = await res.json();
    console.log(comments);
    setComments(comments);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div>
      <Heading>Comments</Heading>
      <Text>Leave above any comment you want to give to me!</Text>
      <div className="p-3 my-3 rounded shadow dark:bg-gray-900">
        {status === "loading" ? (
          <Loader />
        ) : (
          <>
            {session ? (
              <div className="flex flex-col p-3 gap-3">
                <CommentForm session={session} />
                <Button
                  className="w-full bg-gray-400 hover:bg-gray-500"
                  onClick={() => signOut()}
                >
                  Sign out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-5 px-3 my-3">
                <Text>
                  Sign in above with Github to leave a comment! I'll request for
                  email to reply if it is necessary.
                </Text>
                <Button className="" onClick={() => signIn("github")}>
                  Sign in with Github
                </Button>
              </div>
            )}
          </>
        )}
      </div>
      {loading ? (
        <Loader />
      ) : (
        comments.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
};
export default CommentsPage;
