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
        <p
          onClick={toggleIssueForm}
          style={{ cursor: "pointer" }}
          className='small text-primary m-0'>
          Add Issue
        </p>
      )}
      {issueFormActive && <IssueForm status={"Completed"} />}
    </div>
  );
};

export default CompletedList;
