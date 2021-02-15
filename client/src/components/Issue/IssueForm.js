import React, { useState } from "react";
import { createIssue } from "../../redux/actions/issueActions";
import { useDispatch } from "react-redux";
import "./IssueForm.css";

const IssueForm = ({ project }) => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [issuePriority, setIssuePriority] = useState("Low");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createIssue({
        title: issueTitle,
        description: issueDescription,
        priority: issuePriority,
        status: "Unassigned",
        project: project._id,
      })
    );
    setIssueTitle("");
    setIssueDescription("");
    setIssuePriority("Low");
  };
  return (
    <div className='issueFormContainer'>
      <h2>Create an issue...</h2>
      <form className='issueForm form' onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            className='form-control'
            type='text'
            value={issueTitle}
            onChange={(e) => setIssueTitle(e.target.value)}
            placeholder='Issue/Bug...'
          />
        </div>
        <div>
          <input
            className='form-control'
            type='text'
            value={issueDescription}
            onChange={(e) => setIssueDescription(e.target.value)}
            placeholder='Description...'
          />
        </div>
        <div className='issueSelect'>
          <select
            className='form-select'
            value={issuePriority}
            onChange={(e) => setIssuePriority(e.target.value)}>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
            <option value='Urgent'>Urgent</option>
          </select>
        </div>
        <button className='btn issueForm-btn' type='submit'>
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
