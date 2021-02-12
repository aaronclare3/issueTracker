import React from "react";

// components
import IssueItem from "./IssueItem";

const IssueList = ({ todos, changeStatus, editTodo }) => {
  const renderTodos =
    todos.length > 0 &&
    todos.map((todo) => {
      return (
        todo.status === "todo" && (
          <IssueItem
            editTodo={editTodo}
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
          />
        )
      );
    });
  const renderCompleted =
    todos.length > 0 &&
    todos.map((todo) => {
      return (
        todo.status === "completed" && (
          <IssueItem
            editTodo={editTodo}
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
          />
        )
      );
    });
  const renderInProgress =
    todos.length > 0 &&
    todos.map((todo) => {
      return (
        todo.status === "inProgress" && (
          <IssueItem
            editTodo={editTodo}
            key={todo.id}
            todo={todo}
            changeStatus={changeStatus}
          />
        )
      );
    });
  return (
    <div className='row'>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>Todos</h1>
        {renderTodos}
      </div>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>In Progress</h1>
        {renderInProgress}
      </div>
      <div style={{ textAlign: "center" }} className='col'>
        <h1>Completed</h1>
        {renderCompleted}
      </div>
    </div>
  );
};

export default IssueList;
