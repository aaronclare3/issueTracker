import React, { useState } from "react";
import "../styles/App.css";

// components
import TodoList from "../components/TodoList";
import Form from "../components/Form";

const Project = () => {
  const [todos, setTodos] = useState([]);

  const changeStatus = (id, status) => {
    let updatedTodos = [...todos];
    for (let i in updatedTodos) {
      if (updatedTodos[i].id === id) {
        updatedTodos[i].status = status;
      }
    }
    setTodos(updatedTodos);
  };

  const editTodo = (id, newTitle, newDescription, newPriority) => {
    let updatedTodos = [...todos];
    for (let i in updatedTodos) {
      if (updatedTodos[i].id === id) {
        updatedTodos[i].title = newTitle;
        updatedTodos[i].description = newDescription;
        updatedTodos[i].priority = newPriority;
      }
    }
    setTodos(updatedTodos);
  };

  const getTodoFromForm = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <Form getTodoFromForm={getTodoFromForm} />
      <TodoList editTodo={editTodo} todos={todos} changeStatus={changeStatus} />
    </div>
  );
};

export default Project;
