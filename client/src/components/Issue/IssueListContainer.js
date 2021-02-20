import React, { useState } from "react";
import "./IssueListContainer.css";
import { useSelector } from "react-redux";

// components
import IssueForm from "./IssueForm";
import CompletedList from "./Lists/CompletedList";
import InProgressList from "./Lists/InProgressList";
import UnassignedList from "./Lists/UnassignedList";

const IssueListContainer = ({ issues }) => {
  // get projectID here so we dont have to do it 3 times in each of the lists
  const projectId = useSelector((state) => state.projectReducer.project._id);

  return (
    <div className='row issueListContainer'>
      <div className='col'>
        <p>Unassigned</p>
        <UnassignedList issues={issues} projectId={projectId} />
      </div>
      <div className='col'>
        <p>In Progress</p>
        <InProgressList issues={issues} projectId={projectId} />
      </div>
      <div className='col'>
        <p>Done</p>
        <CompletedList issues={issues} projectId={projectId} />
      </div>
    </div>
  );
};

export default IssueListContainer;
