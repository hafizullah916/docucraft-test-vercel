import ContentDisplay from "@/components/ContentDisplay";
import { getDocmnets } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocmnets();
  ``;
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default CategoriesPage;
