import React, { useState } from "react";
import IssueItem from "../IssueItem";
import IssueForm from "../IssueForm";

const InProgressList = ({ issues }) => {
  const [issueFormActive, setIssueFormActive] = useState(false);

  const toggleIssueForm = () => {
    setIssueFormActive((issueFormActive) => !issueFormActive);
  };
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
    <div>
      {renderInProgress}
      {!issueFormActive && (
        <a href='' onClick={toggleIssueForm} className='small'>
          Add Issue
        </a>
      )}
      {issueFormActive && <IssueForm />}
    </div>
  );
};

export default InProgressList;
