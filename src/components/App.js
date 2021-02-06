import React, { useState } from "react";
// components
import TodoList from "./TodoList";
import Form from "./Form";

const App = () => {
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

  const editTodo = (id, newTitle, newDescription) => {
    let updatedTodos = [...todos];
    for (let i in updatedTodos) {
      if (updatedTodos[i].id === id) {
        updatedTodos[i].title = newTitle;
        updatedTodos[i].description = newDescription;
      }
    }
    setTodos(updatedTodos);
  };

  const getTodoFromForm = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className='container'>
      <Form getTodoFromForm={getTodoFromForm} />
      <TodoList editTodo={editTodo} todos={todos} changeStatus={changeStatus} />
    </div>
  );
};

export default App;
