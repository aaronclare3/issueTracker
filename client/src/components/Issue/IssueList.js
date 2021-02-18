import React from "react";
import "./IssueList.css";

// components
import IssueItem from "./IssueItem";

const IssueList = ({ issues }) => {
  const renderIssues =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "Unassigned" && (
          <IssueItem key={issue._id} issue={issue} />
        )
      );
    });
  const renderCompleted =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "Completed" && (
          <IssueItem key={issue._id} issue={issue} />
        )
      );
    });
  const renderInProgress =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "InProgress" && (
          <IssueItem key={issue._id} issue={issue} />
        )
      );
    });
  return (
    <div className='row issueListContainer'>
      <div className='col'>
        <h1>Unassigned</h1>
        {renderIssues}
      </div>
      <div className='col'>
        <h1>In Progress</h1>
        {renderInProgress}
      </div>
      <div className='col'>
        <h1>Completed</h1>
        {renderCompleted}
      </div>
    </div>
  );
};

export default IssueList;
