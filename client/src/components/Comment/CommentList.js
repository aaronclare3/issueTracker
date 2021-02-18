import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ issue }) => {
  const renderComments = issue.comments.map((comment) => {
    return <CommentItem key={comment._id} comment={comment} issue={issue} />;
  });
  return <div>{renderComments}</div>;
};

export default CommentList;
