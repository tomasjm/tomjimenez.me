import Heading from "../../components/Heading";
import Text from "../../components/Text";
import path from "path";
import fs from "fs";
import { snippetsFilePaths, SNIPPETS_PATH } from "../../utils/mdx-utils";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import LinkItem from "../../components/LinkItem";

const SnippetsPage = ({
  snippets,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Heading>Snippets</Heading>
      <Text>
        Esta es una colección de fragmentos de código que encontré útiles, de
        esta manera los puedo guardar y compartir.
      </Text>

      <ul>
        {snippets.map((snippet) => (
          <li className="mb-5" key={snippet.filePath}>
            <LinkItem
              href={`/snippets/${snippet.filePath.replace(/\.mdx?$/, "")}`}
              label={snippet.data.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnippetsPage;

export function getStaticProps() {
  const snippets = snippetsFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data: data,
      filePath,
    };
  });

  return { props: { snippets } };
}
