import { useEffect, useState } from "react";
import { ArticleSummary } from "./ArticleSummary";
import { apiClient } from "../client";
import "../styles/ArticleList.css";

export function ArticleList({ listPagination, setTotalCount }) {
  const [articles, setArticles] = useState([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

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
      <ul className="article-list">
        {articles.map((article) => (
          <ArticleSummary key={article.article_id} article={article} />
        ))}
      </ul>
      <div>
        {articles.length === 0 ? <em>No articles to display</em> : null}
      </div>
    </>
  );
}
