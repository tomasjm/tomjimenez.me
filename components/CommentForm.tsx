import Button from "./Button";
import TextInput from "./TextInput";
import React, { useState } from "react";
import Loader from "./Loader";
type FetchCommentFunction = () => void;
interface CommentFormProps {
  fetchComments: FetchCommentFunction;
}
const CommentForm: React.FC<CommentFormProps> = ({ fetchComments }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const sendComment = async () => {
    setLoading(true);
    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: comment }),
    });
    setComment("");
    fetchComments();
    setLoading(false);
  };
  return (
    <form action="POST">
      <>
        <TextInput
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          label="Tu comentario:"
        />
        {loading ? (
          <Loader />
        ) : (
          <Button
            ariaLabel="Botón de enviar comentario"
            className="w-full"
            onClick={(e) => {
              e.preventDefault();
              sendComment();
            }}
          >
            Dejar comentario{" "}
          </Button>
        )}
      </>
    </form>
  );
};

export default CommentForm;
