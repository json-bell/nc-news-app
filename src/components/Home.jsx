import { useContext, useEffect } from "react";
import { ArticlesContainer } from "./ArticlesContainer";
import { NavContext } from "../contexts/NavContext";

export function Home() {
  const { setSkipNavInfo } = useContext(NavContext);
  useEffect(() => {
    setSkipNavInfo([
      {
        id: "articles",
        contentName: "Articles",
      },
      { id: "pagination", contentName: "Pagination" },
    ]);
  }, []);

  return (
    <>
      <p style={{ margin: 0 }}>Welcome! Here's the home MODIFY</p>
      <ArticlesContainer />
    </>
  );
}
