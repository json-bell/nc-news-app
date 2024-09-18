import { useContext, useEffect, useState } from "react";
import { Article } from "../components/Article";
import { Comments } from "../components/Comments";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";

export function ArticlePage() {
  const [articleNotFound, setArticleNotFound] = useState(null);

  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["article", "comments"]);
  }, []);

  return (
    <>
      <Article setArticleNotFound={setArticleNotFound} />
      <Comments articleNotFound={articleNotFound} />
    </>
  );
}
