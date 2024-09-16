import { Link, useNavigate } from "react-router-dom";

export function ArticleSummary({ article }) {
  const navigate = useNavigate();
  function handleArticleClick(article_id) {
    console.log("clicked!!");
    navigate(`/article/${article_id}`);
  }

  return (
    <li
      className="article-summary"
      onClick={() => handleArticleClick(article.article_id)}
    >
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
