import React, { useState } from "react";
import IssueItem from "../IssueItem";
import IssueForm from "../IssueForm";
import { useDispatch } from "react-redux";
import { createIssue } from "../../../redux/actions/issueActions";

const CompletedList = ({ issues, projectId }) => {
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
      {issueFormActive && (
        <IssueForm status={"Completed"} handleForm={handleForm} />
      )}
    </div>
  );
};

export default CompletedList;
