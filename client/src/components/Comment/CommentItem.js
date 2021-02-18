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
    <div style={{ color: "grey" }}>
      <div>{comment.content}</div>
      {comment.createdBy.username ? (
        <div style={{ marginTop: "-10px", marginBottom: "5px" }}>
          <small style={{ color: "lightgrey" }}>
            {comment.createdBy.username} 10/22/20 at 3:53PM
          </small>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CommentItem;
