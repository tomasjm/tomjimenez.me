import Button from "../../components/Button";
import Comment from "../../components/Comment";
import { useSession, signIn, signOut, SignInResponse } from "next-auth/react";
import React from "react";
import CommentForm from "../../components/CommentForm";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import { FaGithub } from "react-icons/fa";
import Loader from "../../components/Loader";
import { CommentType } from "../../lib/types";
import prisma from "../../lib/prisma";
const CommentsPage = ({ data }) => {
  const [comments, setComments] = React.useState(data);
  const { data: session, status } = useSession();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = React.useState<boolean>(false);
  const fetchComments = async () => {
    setLoading(true);
    const res = await fetch("/api/comments");
    const comments = await res.json();
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
                    <CommentForm fetchComments={fetchComments} />
                    <Button
                      className="w-full"
                      secondary
                      onClick={() => signHandler(false)}
                      ariaLabel="Botón para cerrar sesión"
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
                      ariaLabel="Botón para iniciar sesión con Github"
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
        comments.map((comment: CommentType) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </div>
  );
};
export default CommentsPage;

export async function getStaticProps() {
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });

  const data = comments.map((comment) => ({
    id: comment.id.toString(),
    text: comment.text,
    created_at: comment.createdAt.toString(),
    user: {
      id: comment.user.id.toString(),
      name: comment.user.name,
      image: comment.user.image,
    },
  }));

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
