import { useEffect, useState } from "react";
import { ArticleSummary } from "./ArticleSummary";
import { apiClient } from "../client";
import "../styles/ArticleList.css";
import { Pagination } from "./Pagination";

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);
  const [listPagination, setListPagination] = useState({ limit: 10, p: 1 });

  useEffect(() => {
    setIsArticlesLoading(true);
    apiClient
      .get("articles", { params: { ...listPagination } })
      .then(({ data: { articles, total_count } }) => {
        setArticles(articles);
        setTotalCount(total_count);
      })
      .catch(console.log)
      .finally(setIsArticlesLoading(false));
  }, [listPagination]);

  if (isArticlesLoading) {
    console.log("loading...");
    return (
      <>
        <h2 style={{ color: "red" }}>Articles are loading...</h2>
      </>
    );
  }

  return (
    <>
      <h2>Here's the articles MODIFY</h2>
      <Pagination
        setListPagination={setListPagination}
        listPagination={listPagination}
      />
      <ul className="article-list">
        {articles.map((article) => (
          <ArticleSummary key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
}
