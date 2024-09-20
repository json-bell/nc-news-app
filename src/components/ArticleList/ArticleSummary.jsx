import { Link, useNavigate } from "react-router-dom";
import { convertDateShort } from "../../utils";
import { Card } from "../Card";

export function ArticleSummary({ article }) {
  const navigate = useNavigate();
  function handleArticleClick(article_id) {
    navigate(`/article/${article_id}`);
  }

  return (
    <li className="article-summary">
      <Card link={`/article/${article.article_id}`}>
        <h3 className="heading">{article.title}</h3>
        <img src={article.article_img_url} alt="" />
        <p>
          Topic:{" "}
          <Link className="link" to={`/topics/${article.topic}`}>
            {article.topic}
          </Link>
        </p>
        <p>
          {article.votes} Votes & {article.comment_count} Comments
        </p>
        <p>
          By {article.author}, {convertDateShort(article.created_at)}
        </p>
      </Card>
    </li>
  );
}
