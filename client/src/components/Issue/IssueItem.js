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
    setStatus(newStatus);
    dispatch(updateIssue({ status: newStatus }, issue._id));
  };
  return (
    <>
      <div className='issueItem'>
        <div>{issue.title}</div>
      </div>
      <IssueModal issue={issue} show={show} handleClose={handleClose} />
    </>
  );
};

export default IssueItem;
