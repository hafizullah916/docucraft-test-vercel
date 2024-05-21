import ContentDisplay from "@/components/ContentDisplay";
import { getDocmnets } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";
const TagPage = ({ params: { name } }) => {
  const docs = getDocmnets();
  const matchedDocuments = getDocumentsByTag(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
