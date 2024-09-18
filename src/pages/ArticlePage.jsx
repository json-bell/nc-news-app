import { useContext, useEffect, useState } from "react";
import { Article } from "./Article";
import { Comments } from "./Comments";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";

export function ArticlePage() {
  const [articleNotFound, setArticleNotFound] = useState(null);

  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["articles", "comments"]);
  }, []);

  return (
    <>
      <Article setArticleNotFound={setArticleNotFound} />
      <Comments articleNotFound={articleNotFound} />
    </>
  );
}
