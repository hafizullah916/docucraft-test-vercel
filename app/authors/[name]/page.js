import ContentDisplay from "@/components/ContentDisplay";
import { getDocmnets } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocmnets();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default AuthorPage;
