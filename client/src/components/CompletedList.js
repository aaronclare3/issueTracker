import React from "react";
import TodoItem from "./IssueItem";

const CompletedList = ({ completed }) => {
  const renderCompleted = completed.map((todo) => {
    return <TodoItem key={todo.title} todo={todo} />;
  });
  return (
    <div>
      <h1>Completed Todos</h1>
      {renderCompleted}
    </div>
  );
};

export default CompletedList;
