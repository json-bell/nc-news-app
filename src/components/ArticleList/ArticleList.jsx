import { useEffect, useState } from "react";
import { ArticleSummary } from "./ArticleSummary.jsx";
import { fetchArticles } from "../../client.jsx";
import "../../styles/ArticleList.css";

export function ArticleList({
  listPagination,
  setTotalCount,
  topic,
  sortQueries,
}) {
  const [articles, setArticles] = useState([]);
  const [isArticlesLoading, setIsArticlesLoading] = useState(true);

  useEffect(() => {
    setIsArticlesLoading(true);
    setTotalCount(0);
    fetchArticles({ ...listPagination, ...sortQueries, topic }).then(
      ({ articles, total_count }) => {
        setArticles(articles);
        setTotalCount(total_count);
        setIsArticlesLoading(false);
      }
    );
  }, [listPagination, sortQueries]);

  if (isArticlesLoading) {
    return (
      <>
        <h2 id="articles">Articles are loading...</h2>
      </>
    );
  }

  return (
    <>
      <ul className="article-list" id="articles">
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
