import { Link } from "react-router-dom";

export function ArticleSummary({ article }) {
  return (
    <li className="article-summary">
      <h3 className="title">{article.title}</h3>
      <img src={article.article_img_url} />
      <p>
        Topic:{" "}
        <Link className="link" to={`topic/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>
        Written by {article.author} at {article.created_at}
      </p>
    </li>
  );
}
