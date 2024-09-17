import { useState } from "react";
import { Article } from "./Article";
import { Comments } from "./Comments";

export function ArticlePage() {
  const [articleNotFound, setArticleNotFound] = useState(null);
  return (
    <>
      <Article setArticleNotFound={setArticleNotFound} />
      <Comments articleNotFound={articleNotFound} />
    </>
  );
}
