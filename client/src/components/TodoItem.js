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
          className={`card-header align-middle text-light ${
            todo.priority === "Urgent"
              ? "bg-danger"
              : todo.priority === "High"
              ? "bg-warning"
              : todo.priority === "Medium"
              ? "bg-primary"
              : "bg-info"
          }`}>
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
          <h4 className='card-title'></h4>
          <p className='card-text'>{todo.description}</p>
          {todo.status === "todo" || todo.status === "inProgress" ? (
            <svg
              onClick={() => moveItem(todo.id, todo.status, "advance")}
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-arrow-right-square-fill float-right text-success'
              viewBox='0 0 16 16'>
              <path d='M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z' />
            </svg>
          ) : (
            ""
          )}
          {todo.status === "inProgress" || todo.status === "completed" ? (
            <svg
              onClick={() => moveItem(todo.id, todo.status, "goBack")}
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              fill='currentColor'
              className='bi bi-arrow-left-square-fill float-left text-danger'
              viewBox='0 0 16 16'>
              <path d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z' />
            </svg>
          ) : (
            ""
          )}
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
