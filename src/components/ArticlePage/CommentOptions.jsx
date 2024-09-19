import { useState } from "react";
import { deleteComment } from "../../client";
import "../../styles/Options.css";

export function CommentOptions({
  comment_id,
  isCommentDeleted,
  setIsCommentDeleted,
}) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isRestoreLoading, setIsRestoreLoading] = useState(false);

  function handleDelete(event) {
    console.log("deleting comment", comment_id);
    setIsDeleteLoading(true);
    deleteComment(comment_id)
      .then(() => {
        setIsCommentDeleted(true);
      })
      .catch(() => setIsDeleteLoading(false));
  }

  return (
    <ul className="options-list">
      <li>
        <button
          className={
            "option-button" + (isEditLoading ? " option-button--disabled" : "")
          }
        >
          Edit
        </button>
      </li>
      <li>
        <button
          className={
            "option-button" +
            (isDeleteLoading ? " option-button--disabled" : "")
          }
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
      {isCommentDeleted ? (
        <li>
          <button
            className={
              "option-button" +
              (isRestoreLoading ? " option-button--disabled" : "")
            }
          >
            Restore
          </button>
        </li>
      ) : null}
    </ul>
  );
}
