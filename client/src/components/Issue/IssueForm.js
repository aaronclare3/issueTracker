import React, { useState, useEffect } from "react";
import { createIssue } from "../../redux/actions/issueActions";
import { useDispatch, useSelector } from "react-redux";
import "./IssueForm.css";
import { getProject } from "../../redux/actions/projectActions";

const IssueForm = ({ status }) => {
  const [issueTitle, setIssueTitle] = useState("");
  // const [issueDescription, setIssueDescription] = useState("");
  // const [issuePriority, setIssuePriority] = useState("Low");
  const dispatch = useDispatch();
  const projectId = useSelector((state) => state.projectReducer.project._id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createIssue({
        title: issueTitle,
        status: status,
        project: projectId,
      })
    );
    setIssueTitle("");
    // setIssueDescription("");
    // setIssuePriority("Low");
  };
  return (
    <div className='issueFormContainer'>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setIssueTitle(e.target.value)}
          value={issueTitle}
          type='text'
          className='form-control'
          placeholder='new issue...'
        />
      </form>
    </div>
  );
};

export default IssueForm;
