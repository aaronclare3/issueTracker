import React, { useEffect, useState } from "react";
import { updateIssue, deleteIssue } from "../../redux/actions/issueActions";
import { useDispatch } from "react-redux";
import "./IssueItem.css";

import IssueModal from "./IssueModal";

const IssueItem = ({ issue }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(issue.status);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const moveItem = (direction) => {
    let newStatus;
    if (direction === "advance") {
      if (status === "InProgress") {
        newStatus = "Completed";
      } else if (status === "Unassigned") {
        newStatus = "InProgress";
      }
    } else {
      if (status === "Completed") {
        newStatus = "InProgress";
      } else if (status === "InProgress") {
        newStatus = "Unassigned";
      }
    }
    setStatus(newStatus);
    dispatch(updateIssue({ status: newStatus }, issue._id));
  };
  return (
    <div>
      <div className='issueItem card mb-3'>
        <div className='card-header'>
          <svg
            onClick={() => dispatch(deleteIssue(issue._id))}
            style={{ cursor: "pointer" }}
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='currentColor'
            className='bi bi-x-square-fill float-left'
            viewBox='0 0 16 16'>
            <path d='M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z' />
          </svg>
          {issue.title}
          <svg
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='currentColor'
            className='bi bi-three-dots float-right'
            viewBox='0 0 16 16'>
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
        <div className='card-body'>
          <p className='card-text'>Description: {issue.description}</p>
          <p className='card-text'>Priority: {issue.priority}</p>
          <p className='card-text'>Assigned To: HardCoded</p>
          {status === "Unassigned" || status === "InProgress" ? (
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => moveItem("advance")}
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-arrow-right-short float-right'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
              />
            </svg>
          ) : (
            ""
          )}
          {status === "InProgress" || status === "Completed" ? (
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => moveItem("goBack")}
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-arrow-left-short float-left'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
      <IssueModal issue={issue} show={show} handleClose={handleClose} />
    </div>
  );
};

export default IssueItem;
