import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../../client";
import { useParams } from "react-router-dom";
import "../../styles/Comments.css";
import { CommentForm } from "./CommentForm";
import { Comment } from "./Comment";

export function CommentList({ articleNotFound }) {
  const params = useParams();
  const article_id = Number(params.article_id);

  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [commentJustPosted, setCommentJustPosted] = useState(false);

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
          : `Comments (${comments.length})`}
        {/* MAKE THIS a total_count in the future for pagination */}
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
          <Comment
            comment={comment}
            commentIndex={index}
            key={comment.comment_id}
          />
        ))}
      </ul>
    </>
  );
}
