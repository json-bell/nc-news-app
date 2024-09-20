import { useContext, useEffect } from "react";
import { NavContext } from "../contexts/NavContext";
import { includeSkipNavs } from "../utils";
import { ArticlesContainer } from "../components/ArticleList/ArticlesContainer";

export function Home() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["articles", "pagination"]);
  }, []);

  return (
    <>
      <h1 className="title">
        Welcome! <br />
        See the most recent articles
      </h1>
      <ArticlesContainer />
    </>
  );
}
