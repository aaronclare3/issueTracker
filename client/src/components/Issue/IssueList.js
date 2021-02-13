import React from "react";

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
    <div className='row'>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>Unassigned</h1>
        {renderIssues}
      </div>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>In Progress</h1>
        {renderInProgress}
      </div>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>Completed</h1>
        {renderCompleted}
      </div>
    </div>
  );
};

export default IssueList;
