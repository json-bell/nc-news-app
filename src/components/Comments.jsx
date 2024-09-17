import { useEffect, useState } from "react";
import { apiClient } from "../client";
import { useParams } from "react-router-dom";
import "../styles/Comments.css";
import { convertDateLong } from "../utils";
import { Votes } from "./Votes";
import { CommentForm } from "./CommentForm";

export function Comments({ articleNotFound }) {
  if (articleNotFound) return <></>;
  const params = useParams();
  const article_id = Number(params.article_id);

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  function incrementVoteByCommentId(comment_id) {
    return (inc_votes) => {
      const payload = { inc_votes };
      return apiClient.patch(`comments/${comment_id}`, payload);
    };
  }

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
      <CommentForm article_id={article_id} />
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.comment_id} className="comment-item">
            <h4 className="comment-author">{comment.author} says</h4>
            <p className="comment-time">
              {convertDateLong(comment.created_at)}
            </p>
            <Votes
              votes={comment.votes}
              incrementVote={incrementVoteByCommentId(comment.comment_id)}
              errorLocation={"below"}
            />
            <p className="comment-body">{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
