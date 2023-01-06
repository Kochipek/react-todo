import "./App.css";
import { useState } from "react";
import Task from "./components/Task";
import Form from "./components/Form"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  
  const inputChangeHandler = (e) => {
    setTodo(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: todo,
      isCompleted: false,
    };
    setTodoList([...todoList, task]);
    setTodo("");  // reset the todo state to an empty string
  };
  
  
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const updatedTodoList = todoList.map((task) => {
      if(task.id ===id){
        return{...task,isCompleted:true};
      }  else {
        return task;
      }
    });
    setTodoList(updatedTodoList);
    return updatedTodoList;
  }
  return (
    <div className="todoApp">
     <Form 
     inputChangeHandler={inputChangeHandler}
     addTask={addTask}
     todo={todo}
     />
      <ul className="container">
      {todoList.map((task) => {
  return (
    <Task
      key={task.id}
      taskName={task.taskName}
      id={task.id}
      deleteTask={deleteTask}
      completeTask={completeTask}
      isCompleted={task.isCompleted}
    />
  );
})}
      </ul>
    </div>
  );
}

export default App;