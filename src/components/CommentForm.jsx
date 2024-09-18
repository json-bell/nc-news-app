import { useState } from "react";
import { convertDateLong } from "../utils";
import { Card } from "./Card";
import { postComment } from "../client";

export function CommentForm({ article_id }) {
  const [commentInput, setCommentInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (commentInput.length > 0) {
      postComment({
        article_id,
        username: "grumpy19",
        body: commentInput,
      }).then(() => {
        setCommentInput("");
      });
    }
  }

  function handleUpdate(event) {
    console.log(event.target.value);
    setCommentInput(event.target.value);
  }

  return (
    <>
      <p>Add a new Comment:</p>
      <Card>
        <form onSubmit={handleSubmit} className="comment-form">
          <label htmlFor="body" className="comment-form-label">
            <h4 className="comment-form-title">Post a comment:</h4>
          </label>
          <p className="form-date">{convertDateLong(Date.now())}</p>
          <textarea
            id="body"
            className="comment-form-body"
            placeholder="Your comment..."
            value={commentInput}
            onChange={handleUpdate}
          ></textarea>
          <button type="submit" className="form-button">
            Post
          </button>
        </form>
      </Card>
    </>
  );
}
