import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const IssueModal = ({ todo, show, handleClose, editTodo }) => {
  const [title, setTitle] = useState(todo && todo.title);
  const [description, setDescription] = useState(todo && todo.description);
  const [priority, setPriority] = useState(todo && todo.priority);
  const handleUpdates = () => {
    const updatedTitle = title;
    const updatedDescription = description;
    const updatedPriority = priority;
    editTodo(todo.id, updatedTitle, updatedDescription, updatedPriority);
  };
  const closeAndUpdate = () => {
    handleClose();
    handleUpdates();
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={closeAndUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default IssueModal;
