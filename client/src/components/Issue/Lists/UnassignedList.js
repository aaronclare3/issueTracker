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
        <p
          onClick={toggleIssueForm}
          style={{ cursor: "pointer" }}
          className='small text-primary m-0'>
          Add Issue
        </p>
      )}
      {issueFormActive && <IssueForm status={"Unassigned"} />}
    </div>
  );
};

export default UnassignedList;
