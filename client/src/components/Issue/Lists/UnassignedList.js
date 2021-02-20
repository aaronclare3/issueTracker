import React, { useState } from "react";
import IssueItem from "../IssueItem";
import IssueForm from "../IssueForm";
import { useDispatch } from "react-redux";
import { createIssue } from "../../../redux/actions/issueActions";

const UnassignedList = ({ issues, projectId }) => {
  const [issueFormActive, setIssueFormActive] = useState(false);
  const dispatch = useDispatch();

  const toggleIssueForm = () => {
    setIssueFormActive((issueFormActive) => !issueFormActive);
  };

  const handleForm = (issueTitle, status) => {
    dispatch(
      createIssue({
        title: issueTitle,
        status: status,
        project: projectId,
      })
    );
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
      {issueFormActive && (
        <IssueForm handleForm={handleForm} status={"Unassigned"} />
      )}
    </div>
  );
};

export default UnassignedList;
