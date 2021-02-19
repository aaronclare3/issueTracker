import React, { useState } from "react";
import IssueItem from "../IssueItem";
import IssueForm from "../IssueForm";

const UnassignedList = ({ issues }) => {
  const [issueFormActive, setIssueFormActive] = useState(false);

  const toggleIssueForm = () => {
    setIssueFormActive((issueFormActive) => !issueFormActive);
  };
  const renderUnassigned =
    issues.length > 0 &&
    issues.map((issue) => {
      return (
        issue.status === "Unassigned" && (
          <IssueItem key={issue._id} issue={issue} />
        )
      );
    });
  return (
    <div>
      {renderUnassigned}
      {!issueFormActive && (
        <a href='' onClick={toggleIssueForm} className='small'>
          Add Issue
        </a>
      )}
      {issueFormActive && <IssueForm />}
    </div>
  );
};

export default UnassignedList;
