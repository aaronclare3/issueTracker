import React from "react";

// components
import IssueItem from "./IssueItem";

const IssueList = ({ issues, changeStatus, editIssue }) => {
  const renderIssues =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "issue" && (
          <IssueItem
            editIssue={editIssue}
            key={issue.id}
            issue={issue}
            changeStatus={changeStatus}
          />
        )
      );
    });
  const renderCompleted =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "completed" && (
          <IssueItem
            editIssue={editIssue}
            key={issue.id}
            issue={issue}
            changeStatus={changeStatus}
          />
        )
      );
    });
  const renderInProgress =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "inProgress" && (
          <IssueItem
            editIssue={editIssue}
            key={issue.id}
            issue={issue}
            changeStatus={changeStatus}
          />
        )
      );
    });
  return (
    <div className='row'>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>Issues</h1>
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
