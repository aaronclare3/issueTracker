import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { updateIssue } from "../../redux/actions/issueActions";
import { getProject } from "../../redux/actions/projectActions";
import { useDispatch } from "react-redux";
import CommentForm from "../Comment/CommentForm";
import CommentList from "../Comment/CommentList";

const IssueModal = ({ issue, show, handleClose }) => {
  const [title, setTitle] = useState(issue && issue.title);
  const [description, setDescription] = useState(issue && issue.description);
  const [priority, setPriority] = useState(issue && issue.priority);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!issue.createdBy.username) {
      dispatch(getProject(issue.project));
    }
  }, [issue.createdBy]);

  const handleModalClose = (option) => {
    if (option === "nosave") {
      // if user isn't saving we want to reset modal back to what it was
      handleClose();
      setTitle(issue.title);
      setDescription(issue.description);
      setPriority(issue.priority);
    } else if (option === "save") {
      // if they do save, handle issue update and close
      dispatch(updateIssue({ title, description, priority }, issue._id));
      handleClose();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              className='form-control'
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            className='form-control'
            type='text'
            onChange={(e) => setDescription(e.target.value)}
            value={description}></textarea>
          <select
            value={priority}
            className='form-select'
            onChange={(e) => setPriority(e.target.value)}>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
            <option value='Urgent'>Urgent</option>
          </select>
          <div style={{ color: "black" }}>
            Created By: {issue.createdBy.username}
          </div>
          <CommentList issue={issue} />
          <CommentForm issue={issue} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => handleModalClose("nosave")}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handleModalClose("save")}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IssueModal;
