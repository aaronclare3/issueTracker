import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ getTodoFromForm }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getTodoFromForm({
      title: todoTitle,
      description: todoDescription,
      id: uuid(),
      status: "todo",
    });
    setTodoTitle("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className='form-control'
        type='text'
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        placeholder='Title'
      />
      <input
        className='form-control'
        type='text'
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
        placeholder='Description'
      />
      <button className='btn btn-info btn-sm' type='submit'>
        Submit Todo
      </button>
    </form>
  );
};

export default Form;
