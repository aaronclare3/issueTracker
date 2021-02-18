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
        <p>Unassigned</p>
        {renderIssues}
      </div>
      <div className='col'>
        <p>In Progress</p>
        {renderInProgress}
      </div>
      <div className='col'>
        <p>Done</p>
        {renderCompleted}
      </div>
    </div>
  );
};

export default IssueList;
