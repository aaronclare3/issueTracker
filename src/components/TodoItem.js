import React, { useEffect, useState } from "react";

import TodoModal from "./TodoModal";

const TodoItem = ({ todo, changeStatus, editTodo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    console.log("settingShowCLOSE");
  };
  const handleShow = () => {
    setShow(true);
    console.log("settingShowOpen");
  };

  const moveItem = (id, status, direction) => {
    if (direction === "advance") {
      if (todo.status === "inProgress") {
        status = "completed";
      } else if (todo.status === "todo") {
        status = "inProgress";
      }
    } else {
      if (todo.status === "completed") {
        status = "inProgress";
      } else if (todo.status === "inProgress") {
        status = "todo";
      }
    }
    changeStatus(id, status);
  };
  return (
    <div>
      <div
        className='card text-dark bg-light mb-3'
        style={{ maxWidth: "18rem", margin: "0 auto" }}>
        <div
          style={{ alignItems: "center" }}
          className='card-header align-middle'>
          {todo.title}{" "}
          <svg
            onClick={handleShow}
            style={{ cursor: "pointer" }}
            xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='26'
            fill='currentColor'
            className='bi bi-three-dots float-right'
            viewBox='0 0 16 16'>
            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
          </svg>
        </div>
        <div className='card-body'>
          <h4 className='card-title'>
            {todo.status === "todo" || todo.status === "inProgress" ? (
              <button
                className='btn btn-success'
                onClick={() => moveItem(todo.id, todo.status, "advance")}>
                Advance
              </button>
            ) : (
              ""
            )}
            {todo.status === "inProgress" || todo.status === "completed" ? (
              <button
                className='btn btn-danger'
                onClick={() => moveItem(todo.id, todo.status, "goBack")}>
                Go Back
              </button>
            ) : (
              ""
            )}
          </h4>
        </div>
      </div>
      <TodoModal
        todo={todo}
        editTodo={editTodo}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export default TodoItem;
