import Button from "./Button";
import TextInput from "./TextInput";
import { useState } from "react";
const CommentForm = ({ session }) => {
  const [comment, setComment] = useState("");
  const sendComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: comment }),
    });
    const data = await res.json();
    console.log(data);
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
        <Button
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            sendComment();
          }}
        >
          Dejar comentario{" "}
        </Button>
      </>
    </form>
  );
};

export default CommentForm;
