import { convertDateLong, convertDateShort } from "../utils";

export function CommentForm({ article_id }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <p>Add a new Comment:</p>
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="body" className="comment-form-label">
          <h4 className="comment-form-title">Post a comment:</h4>
        </label>
        <p className="form-date">{convertDateLong(Date.now())}</p>
        <textarea
          id="body"
          className="comment-form-body"
          placeholder="Your comment"
        ></textarea>
        <button type="submit" className="form-button">
          Post
        </button>
      </form>
    </>
  );
}
