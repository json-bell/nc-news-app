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
      <h2 className="title">Welcome!</h2>
      <ArticlesContainer />
    </>
  );
}
