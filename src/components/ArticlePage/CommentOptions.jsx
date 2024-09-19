import { useState } from "react";
import { deleteComment } from "../../client";
import "../../styles/Options.css";

export function CommentOptions({ comment_id }) {
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

  function handleDelete(event) {
    console.log("deleting comment", comment_id);
    setIsDeleteLoading(true);
    deleteComment(comment_id).finally(() => setIsDeleteLoading(false));
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
    </ul>
  );
}
