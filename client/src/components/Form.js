import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ getTodoFromForm }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getTodoFromForm({
      title: todoTitle,
      description: todoDescription,
      priority: todoPriority,
      id: uuid(),
      status: "todo",
    });
    setTodoTitle("");
    setTodoDescription("");
    setTodoPriority("");
  };
  return (
    <div className='container'>
      <form className='form' onSubmit={(e) => handleSubmit(e)}>
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
        <select
          className='form-select'
          onChange={(e) => setTodoPriority(e.target.value)}>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
          <option value='Urgent'>Urgent</option>
        </select>
        <button className='btn btn-info btn-sm' type='submit'>
          Submit Todo
        </button>
      </form>
    </div>
  );
};

export default Form;
