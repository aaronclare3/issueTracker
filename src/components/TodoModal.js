import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TodoModal = ({ todo, show, handleClose, editTodo }) => {
  const [title, setTitle] = useState(todo && todo.title);
  const [description, setDescription] = useState(todo && todo.description);
  const handleUpdates = () => {
    const updatedTitle = title;
    const updatedDescription = description;
    editTodo(todo.id, updatedTitle, updatedDescription);
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={(handleClose, handleUpdates)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoModal;
