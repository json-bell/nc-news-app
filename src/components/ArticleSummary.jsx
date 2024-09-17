import { Link, useNavigate } from "react-router-dom";
import { convertDateShort } from "../utils";

export function ArticleSummary({ article }) {
  const navigate = useNavigate();
  function handleArticleClick(article_id) {
    navigate(`/article/${article_id}`);
  }

  return (
    <li
      className="article-summary"
      onClick={() => handleArticleClick(article.article_id)}
      tabIndex={0}
    >
      <h3 className="title">{article.title}</h3>
      <img src={article.article_img_url} alt="" />
      <p>
        Topic:{" "}
        <Link className="link" to={`/topics/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>
        Written by {article.author} on {convertDateShort(article.created_at)}
      </p>
    </li>
  );
}
