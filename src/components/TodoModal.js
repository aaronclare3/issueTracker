import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TodoModal = ({ todo, show, handleClose, editTodo }) => {
  const [title, setTitle] = useState(todo && todo.title);
  const [description, setDescription] = useState(todo && todo.status);
  const handleChanges = () => {
    const title = todo.title;
    const description = todo.description;
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <input
              type='text'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={(handleClose, handleChanges)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoModal;
