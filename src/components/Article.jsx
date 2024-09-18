import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { convertDateLong } from "../utils";
import "../styles/Article.css";
import { ErrorMsg } from "./ErrorMsg";
import { fetchArticleById, patchArticleVotes } from "../client";
import { Votes } from "./Votes";
import { Card } from "./Card";

export function Article({ setArticleNotFound }) {
  const params = useParams();
  const article_id = Number(params.article_id);

  const [article, setArticle] = useState(null);
  const [isArticleLoading, setIsArticleLoading] = useState(true);
  const [articleError, setArticleError] = useState({ code: null });

  useEffect(() => {
    setIsArticleLoading(true);
    fetchArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsArticleLoading(false);
        setArticleNotFound(false);
      })
      .catch(({ response }) => {
        setArticleNotFound(true);
        setArticleError(response.data);
      });
  }, []);

  function incrementArticleVote(inc_votes) {
    return patchArticleVotes(article_id, inc_votes);
  }

  if (articleError.code) {
    return <ErrorMsg error={articleError} />;
  }

  if (isArticleLoading)
    return (
      <>
        <em>Article #{article_id} is loading...</em>
      </>
    );
  return (
    <article className="article" id="article">
      <Card>
        <h2 className="heading">{article.title}</h2>
        <p>
          Topic:{" "}
          <Link className="link" to={`/topics/${article.topic}`}>
            {article.topic}
          </Link>
        </p>
        <Votes votes={article.votes} incrementVote={incrementArticleVote} />
        <p>
          Written by {article.author}, on {convertDateLong(article.created_at)}
        </p>
        <img src={article.article_img_url} className="article-img" alt="" />
        <p className="article-body">{article.body}</p>
      </Card>
    </article>
  );
}
