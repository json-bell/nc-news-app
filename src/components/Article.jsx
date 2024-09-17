import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { apiClient } from "../client";
import { convertDateLong } from "../utils";
import "../styles/Article.css";
import { ErrorMsg } from "./ErrorMsg";

export function Article() {
  const params = useParams();
  const article_id = Number(params.article_id);

  const [article, setArticle] = useState(null);
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [articleError, setArticleError] = useState({ code: null });

  useEffect(() => {
    setIsArticleLoading(true);
    apiClient
      .get(`/articles/${article_id}`)
      .then(({ data }) => {
        setArticle(data.article);
        console.log(data);
        setIsArticleLoading(false);
      })
      .catch(({ response }) => {
        console.log(response.data);
        setArticleError(response.data);
      });
  }, []);

  if (articleError.code) {
    console.log("errored");
    return <ErrorMsg error={articleError} />;
  }

  if (isArticleLoading)
    return (
      <>
        <em>Article #{article_id} is loading...</em>
      </>
    );

  return (
    <article className="article">
      <h2 className="article-title">{article.title}</h2>
      <p>
        Topic:{" "}
        <Link className="link" to={`/topics/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>
        Written by {article.author}, on {convertDateLong(article.created_at)}
      </p>
      <img src={article.article_img_url} className="article-img" alt="" />
      <p className="article-body">{article.body}</p>
    </article>
  );
}
