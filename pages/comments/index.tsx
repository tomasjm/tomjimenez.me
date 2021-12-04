import Button from "../../components/Button";
import Comment from "../../components/Comment";
import { useSession, signIn, signOut, SignInResponse } from "next-auth/react";
import React from "react";
import CommentForm from "../../components/CommentForm";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { FaGithub } from "react-icons/fa";
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
  const [loadingAuth, setLoadingAuth] = React.useState(false);
  const fetchComments = async () => {
    setLoading(true);
    const res = await fetch("/api/comments");
    const comments = await res.json();
    console.log(comments);
    setComments(comments);
    setLoading(false);
  };
  const signHandler = async (type: boolean = true) => {
    setLoadingAuth(true);
    if (type) {
      await signIn("github", { callbackUrl: "/comments" });
    } else {
      await signOut({ callbackUrl: "/comments" });
    }
    setLoadingAuth(false);
  };
  React.useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div>
      <Heading>Comentarios</Heading>
      <Text>Deja aquí abajo cualquier comentario que tengas!</Text>
      <div className="p-3 my-3 rounded shadow dark:bg-gray-900">
        {status === "loading" ? (
          <Loader />
        ) : (
          <>
            {loadingAuth ? (
              <Loader />
            ) : (
              <>
                {session ? (
                  <div className="flex flex-col p-3 gap-3">
                    <CommentForm session={session} />
                    <Button
                      className="w-full bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700"
                      onClick={() => signHandler(false)}
                    >
                      Cerrar sesión
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 px-3 my-3">
                    <Text>
                      Ingresa con tu cuenta de Github para poder comentar, te
                      pedirá tu correo que se utilizará en caso de ser necesaria
                      un respuesta.
                    </Text>
                    <Button
                      className="flex flex-row gap-3 justify-center items-center font-bold"
                      onClick={() => signHandler()}
                    >
                      <FaGithub />
                      Ingresar con Github
                    </Button>
                  </div>
                )}
              </>
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
