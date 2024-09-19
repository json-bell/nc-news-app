import { useContext, useState } from "react";
import { convertDateLong, pulseMsg } from "../../utils";
import { Card } from "../Card";
import { postComment } from "../../client";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export function CommentForm({ article_id, setComments, setCommentJustPosted }) {
  const [commentInput, setCommentInput] = useState("");
  const [commentMsg, setCommentMsg] = useState(null);
  const [commentError, setCommentError] = useState(null);

  const { loggedInUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (commentInput.length > 0) {
      pulseMsg("Posting...", setCommentMsg);
      postComment({
        article_id,
        username: loggedInUser.username,
        body: commentInput,
      })
        .then(({ comment }) => {
          setCommentInput("");
          setComments((comments) => [comment, ...comments]);
          setCommentJustPosted(true);
          setTimeout(() => {
            setCommentJustPosted(false);
          }, 400);
        })
        .catch((err) => {
          pulseMsg("That didn't work...", setCommentError);
        });
    } else pulseMsg("Can't post empty comment...", setCommentError);
  }

  function handleUpdate(event) {
    setCommentInput(event.target.value);
  }

  return (
    <>
      {loggedInUser.username ? (
        <Card>
          <form onSubmit={handleSubmit} className="comment-form">
            <label htmlFor="body" className="comment-form-label">
              <h4 className="comment-form-title">
                Comment as {loggedInUser.username}:
              </h4>
            </label>
            <p className="comment-form-date">{convertDateLong(Date.now())}</p>
            <textarea
              id="body"
              className="comment-form-body"
              placeholder="Your comment..."
              value={commentInput}
              onChange={handleUpdate}
            ></textarea>
            <button type="submit" className="form-button comment-form-button">
              Post
            </button>
            {commentMsg ? (
              <em className={"comment-message pulse-message"}>{commentMsg}</em>
            ) : null}
            {commentError ? (
              <em className={"comment-error pulse-message"}>{commentError}</em>
            ) : null}
          </form>
        </Card>
      ) : (
        <Card>
          <p>
            <Link to="/login">Log in</Link> to post a comment!
          </p>
        </Card>
      )}
    </>
  );
}
