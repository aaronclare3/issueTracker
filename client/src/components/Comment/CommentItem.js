import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProject } from "../../redux/actions/projectActions";

const CommentItem = ({ comment, issue }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!comment.createdBy.username) {
      dispatch(getProject(issue.project));
      console.log("if", comment.content);
    }
  }, [comment.createdBy]);
  return (
    <div style={{ color: "black" }}>
      {comment.content}
      <div>
        {comment.createdBy.username ? (
          <small>-{comment.createdBy.username}</small>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentItem;
