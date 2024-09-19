import { useEffect, useState } from "react";
import { fetchCommentsByArticle, patchCommentVotes } from "../../client";
import { useParams } from "react-router-dom";
import "../../styles/Comments.css";
import { convertDateLong } from "../../utils";
import { Votes } from "../Votes";
import { CommentForm } from "./CommentForm";
import { Card } from "../Card";

export function Comments({ articleNotFound }) {
  const params = useParams();
  const article_id = Number(params.article_id);

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [commentJustPosted, setCommentJustPosted] = useState(false);

  function incrementVoteByCommentId(comment_id) {
    return (inc_votes) => patchCommentVotes(comment_id, inc_votes);
  }

  useEffect(() => {
    setIsCommentsLoading(true);
    fetchCommentsByArticle(article_id).then(({ comments }) => {
      setComments(comments);
      setIsCommentsLoading(false);
    });
  }, []);

  if (articleNotFound) return <></>;

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
      <CommentForm
        article_id={article_id}
        setComments={setComments}
        setCommentJustPosted={setCommentJustPosted}
      />
      <ul
        className={
          "comment-list " + (commentJustPosted ? "comment-just-posted" : "")
        }
      >
        {comments.map((comment, index) => (
          <Card
            key={comment.comment_id}
            extraClasses={index === 0 ? ["first-comment"] : [""]}
          >
            <li className="comment-item">
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
          </Card>
        ))}
      </ul>
    </>
  );
}
