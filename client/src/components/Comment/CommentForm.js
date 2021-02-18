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
        <div className='form-row'>
          <input
            className='form-control'
            type='text'
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder='Comment...'
          />
          <button className='btn btn-primary commentForm-btn' type='submit'>
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
