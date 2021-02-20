import React, { useEffect, useState } from "react";
import { updateIssue, deleteIssue } from "../../redux/actions/issueActions";
import { useDispatch } from "react-redux";
import "./IssueItem.css";
import IssueModal from "./IssueModal";
import { getProject } from "../../redux/actions/projectActions";

const IssueItem = ({ issue }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(issue.status);
  const [showFullCard, setShowFullCard] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "Completed") {
      setShowFullCard(false);
    } else {
      setShowFullCard(true);
    }
  }, [status]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const toggleShowFullCard = () => {
    setShowFullCard((showFullCard) => !showFullCard);
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
    dispatch(updateIssue({ status: newStatus }, issue._id));
    // this prevents the arrows from removing/adding before the item is moved to the next section
    setTimeout(() => {
      setStatus(newStatus);
    }, 200);
  };
  return (
    <>
      <div className='issueItem row'>
        <div>{issue.title}</div>
        <div className='ml-auto mr-2'>
          {status == "InProgress" || status == "Completed" ? (
            <svg
              onClick={() => moveItem("goBack")}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-double-left'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
              />
              <path
                fillRule='evenodd'
                d='M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
              />
            </svg>
          ) : (
            ""
          )}
          {status === "Unassigned" || status === "InProgress" ? (
            <svg
              onClick={() => moveItem("advance")}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-double-right'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z'
              />
              <path
                fillRule='evenodd'
                d='M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z'
              />
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
      <IssueModal issue={issue} show={show} handleClose={handleClose} />
    </>
  );
};

export default IssueItem;
