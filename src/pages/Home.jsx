import { useContext, useEffect } from "react";
import { ArticlesContainer } from "../components/ArticlesContainer";
import { NavContext } from "../contexts/NavContext";
import { includeSkipNavs } from "../utils";

export function Home() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    includeSkipNavs(setSkipNavInfo, ["articles", "pagination"]);
  }, []);

  return (
    <>
      <p style={{ margin: 0 }}>Welcome! Here's the home MODIFY</p>
      <ArticlesContainer />
    </>
  );
}
