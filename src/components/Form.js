import React from "react";

const Form = (props) => {
  const { inputChangeHandler, addTask, todo } = props;

  return (
    <div className="todoApp">
      <h1>Todo List</h1>
      <div className="addTask">
    <form onSubmit={addTask}>
      <input type="text" value={todo} onChange={inputChangeHandler} />
      <button type="submit">Add Task</button>
    </form>
    </div>
    </div>
  )};

    export default Form;