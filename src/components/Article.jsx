import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { apiClient } from "../client";
import { convertDateLong } from "../utils";
import "../styles/Article.css";

export function Article() {
  const params = useParams();
  const article_id = Number(params.article_id);

  const [article, setArticle] = useState(null);
  const [isArticleLoading, setIsArticleLoading] = useState(true);

  useEffect(() => {
    setIsArticleLoading(true);
    apiClient
      .get(`/articles/${article_id}`)
      .then(({ data }) => {
        setArticle(data.article);
        console.log(data);
        setIsArticleLoading(false);
      })
      .catch(console.log);
  }, []);

  if (isArticleLoading)
    return (
      <>
        <em>Article #{article_id} is loading...</em>
      </>
    );
  return (
    <article className="article">
      <h3 className="article-title">{article.title}</h3>
      <p>
        Topic:{" "}
        <Link className="link" to={`topic/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>
        Written by {article.author}, on {convertDateLong(article.created_at)}
      </p>
      <img src={article.article_img_url} className="article-img" />
      <p className="article-body">{article.body}</p>
    </article>
  );
}
