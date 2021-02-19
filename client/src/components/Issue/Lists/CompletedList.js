import React, { useState } from "react";
import IssueItem from "../IssueItem";
import IssueForm from "../IssueForm";

const CompletedList = ({ issues }) => {
  const [issueFormActive, setIssueFormActive] = useState(false);

  const toggleIssueForm = () => {
    setIssueFormActive((issueFormActive) => !issueFormActive);
  };
  const renderCompleted =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "Completed" && (
          <IssueItem key={issue._id} issue={issue} />
        )
      );
    });
  return (
    <div>
      {renderCompleted}
      {!issueFormActive && (
        <a href='' onClick={toggleIssueForm} className='small'>
          Add Issue
        </a>
      )}
      {issueFormActive && <IssueForm />}
    </div>
  );
};

export default CompletedList;
