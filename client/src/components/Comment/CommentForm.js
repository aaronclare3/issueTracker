import React, { useState } from "react";
import { createComment } from "../../redux/actions/commentActions";
import { useDispatch } from "react-redux";
import { getProject } from "../../redux/actions/projectActions";
import "./CommentForm.css";

const CommentForm = ({ issue }) => {
  const [commentContent, setCommentContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createComment({
        content: commentContent,
        issue: issue._id,
      })
    );
    setCommentContent("");
  };

  return (
    <div className='commentFormContainer'>
      <form className='commentForm form' onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            className='form-control'
            type='text'
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder='Comment...'
          />
        </div>
        <button className='btn commentForm-btn' type='submit'>
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
