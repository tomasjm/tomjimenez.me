import format from "date-fns/format";

import Text from "./Text";
interface CommentProps {
  text: string;
  created_at: Date;
  user: UserCommentProps;
}
interface UserCommentProps {
  name: string;
  image: string;
}

const Comment = ({ comment }) => {
  const {
    text,
    created_at,
    user: { name, image },
  }: CommentProps = comment;
  return (
    <div className="flex flex-row items-center shadow-md dark:shadow dark:bg-gray-900 rounded w-full mb-2">
      <img
        className="rounded-full m-3"
        src={image}
        alt="avatar"
        width={50}
        height={50}
      />

      <div className="flex flex-col justify-between gap-1">
        <Text>{text}</Text>
        <div className="flex flex-row gap-5">
          <Text className="text-xs italic">{name}</Text>
          <Text className="text-xs italic">
            {format(new Date(created_at), "d MMM yyyy 'at' h:mm bb")}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default Comment;
