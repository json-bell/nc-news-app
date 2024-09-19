import { Card } from "../Card";
import { Votes } from "../Votes";
import { CommentOptions } from "./CommentOptions";
import { convertDateLong, convertDateShort } from "../../utils";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { patchCommentVotes } from "../../client";

export function Comment({ comment, commentIndex }) {
  const { loggedInUser } = useContext(UserContext);

  const incrementVote = (inc_votes) =>
    patchCommentVotes(comment.comment_id, inc_votes);

  return (
    <Card extraClasses={commentIndex === 0 ? ["first-comment"] : [""]}>
      <li className="comment-item">
        <h4 className="comment-author">
          {comment.author === loggedInUser.username
            ? "You said"
            : `${comment.author} said`}
        </h4>
        <p className="comment-time">{convertDateLong(comment.created_at)}</p>
        <div className="comment-options">
          <Votes
            votes={comment.votes}
            incrementVote={incrementVote}
            errorLocation={"below"}
          />
          {comment.author === loggedInUser.username ? (
            <CommentOptions comment_id={comment.comment_id} />
          ) : null}
        </div>
        <p className="comment-body">{comment.body}</p>
      </li>
    </Card>
  );
}
