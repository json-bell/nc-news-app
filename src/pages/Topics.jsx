import { useContext, useEffect } from "react";
import "../styles/Login.css";
import { includeSkipNavs } from "../utils";
import { NavContext } from "../contexts/NavContext";
import { ArticlesContainer } from "../components/ArticleList/ArticlesContainer";

export function Topics() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["articles", "pagination"]);
  }, []);

  return (
    <>
      <h2>Topics</h2>
      <ArticlesContainer />
    </>
  );
}
