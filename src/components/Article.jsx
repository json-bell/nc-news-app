import { useParams, useSearchParams } from "react-router-dom";

export function Article() {
  const params = useParams();
  const article_id = Number(params.article_id);
  console.log({ article_id });
  return (
    <>
      <p> You're seeing a specific article MODIFY</p>
      <p>With ID {article_id}</p>
    </>
  );
}
