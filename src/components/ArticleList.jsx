import { useEffect, useState } from "react";
import { ArticleSummary } from "./ArticleSummary";
import { apiClient } from "../client";
import "../styles/ArticleList.css";

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

  useEffect(() => {
    setIsArticlesLoading(true);
    apiClient
      .get("articles")
      .then(({ data: { articles, total_count } }) => {
        setArticles(articles);
        setTotalCount(total_count);
        console.log(articles[0]);
      })
      .catch(console.log)
      .finally(setIsArticlesLoading(false));
  }, []);

  if (isArticlesLoading)
    return (
      <>
        <h2>Articles are loading...</h2>
      </>
    );

  return (
    <>
      <h2>Here's the articles MODIFY</h2>
      <ul className="article-list">
        {articles.map((article) => (
          <ArticleSummary key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
}
