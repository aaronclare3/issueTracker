import React, { useState } from "react";
import "./IssueListContainer.css";

// components
import IssueForm from "./IssueForm";
import CompletedList from "./Lists/CompletedList";
import InProgressList from "./Lists/InProgressList";
import UnassignedList from "./Lists/UnassignedList";

const IssueListContainer = ({ issues }) => {
  return (
    <div className='row issueListContainer'>
      <div className='col'>
        <p>Unassigned</p>
        <UnassignedList issues={issues} />
      </div>
      <div className='col'>
        <p>In Progress</p>
        <InProgressList issues={issues} />
      </div>
      <div className='col'>
        <p>Done</p>
        <CompletedList issues={issues} />
      </div>
    </div>
  );
};

export default IssueListContainer;
