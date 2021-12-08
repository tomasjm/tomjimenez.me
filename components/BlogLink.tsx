import { BlogPostInfoType } from "../lib/types";
import LinkItem from "./LinkItem";
import Text from "./Text";

const BlogLink = ({ href, ...props }) => {
  const { title, publishedAt, summary }: BlogPostInfoType =
    props as BlogPostInfoType;
  return (
    <div className="flex flex-col">
      <LinkItem ignoreActive href={href}>
        <div className="flex flex-row items-center justify-between">
          <Text className="text-xl font-bold">{title}</Text>
          <Text className="text-lg italic text-gray-600 dark:text-gray-300">
            {publishedAt}
          </Text>
        </div>
        <Text className="text-lg text-gray-600 dark:text-gray-300">
          {summary}
        </Text>
      </LinkItem>
    </div>
  );
};

export default BlogLink;
