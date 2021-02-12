import React, { useState } from "react";
import { createIssue } from "../redux/actions/issueActions";
import { useDispatch } from "react-redux";

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
    setIssuePriority("");
  };
  return (
    <div className='container'>
      <h2>Create an issue</h2>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
        <input
          className='form-control'
          type='text'
          value={issueTitle}
          onChange={(e) => setIssueTitle(e.target.value)}
          placeholder='Issue/Bug...'
        />
        <input
          className='form-control'
          type='text'
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
          placeholder='Description...'
        />
        <select
          className='form-select'
          onChange={(e) => setIssuePriority(e.target.value)}>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
          <option value='Urgent'>Urgent</option>
        </select>
        <button className='btn btn-info btn-sm' type='submit'>
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
