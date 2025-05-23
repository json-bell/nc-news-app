import { useContext, useEffect, useState } from "react";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";
import { Article } from "../components/ArticlePage/Article";
import { CommentList } from "../components/ArticlePage/CommentList";

export function ArticlePage() {
  const [articleNotFound, setArticleNotFound] = useState(null);

  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["article", "comments"]);
  }, []);

  return (
    <>
      <Article setArticleNotFound={setArticleNotFound} />
      <CommentList articleNotFound={articleNotFound} />
    </>
  );
}
