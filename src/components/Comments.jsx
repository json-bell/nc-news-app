import { useEffect, useState } from "react";
import { apiClient } from "../client";
import { useParams } from "react-router-dom";
import "../styles/Comments.css";
import { convertDateLong } from "../utils";

export function Comments({ articleNotFound }) {
  if (articleNotFound) return <></>;
  const params = useParams();
  const article_id = Number(params.article_id);

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  useEffect(() => {
    setIsCommentsLoading(true);
    apiClient.get(`/articles/${article_id}/comments`).then(({ data }) => {
      setComments(data.comments);
      setIsCommentsLoading(false);
    });
  }, []);

  if (isCommentsLoading)
    return (
      <>
        <em>Comments are loading...</em>
      </>
    );

  return (
    <>
      <h3 id="comments">
        {comments.length === 0
          ? "There are no comments yet... Be the first!"
          : "Here are the comments"}
      </h3>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.comment_id} className="comment-item">
            <h4 className="comment-author">{comment.author} says</h4>
            <p className="comment-time">
              {convertDateLong(comment.created_at)}
            </p>
            <div className="comment-votes">
              <button className="up-vote comment-vote-button">&uarr;</button>
              <span className="vote-count">{comment.votes}</span>
              <button className="down-vote comment-vote-button">&darr;</button>
            </div>
            <p className="comment-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
