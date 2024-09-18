import { useEffect, useState } from "react";
import { ArticleSummary } from "./ArticleSummary";
import { fetchArticles } from "../client.jsx";
import "../styles/ArticleList.css";

export function ArticleList({ listPagination, setTotalCount }) {
  const [articles, setArticles] = useState([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

  useEffect(() => {
    setIsArticlesLoading(true);
    fetchArticles({ ...listPagination }).then(({ articles, total_count }) => {
      setArticles(articles);
      setTotalCount(total_count);
      setIsArticlesLoading(false);
    });
  }, [listPagination]);

  if (isArticlesLoading) {
    return (
      <>
        <h2>Articles are loading...</h2>
      </>
    );
  }

  return (
    <>
      <h2 id="articles">Here's the articles MODIFY</h2>
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
