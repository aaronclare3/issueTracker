import React from "react";

// components
import TodoItem from "./TodoItem";

const TodoList = ({ todos, changeStatus, editTodo }) => {
  const renderTodos =
    todos.length > 0 &&
    todos.map((todo) => {
      return (
        todo.status === "todo" && (
          <TodoItem
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
          <TodoItem
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
          <TodoItem
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

export default TodoList;
