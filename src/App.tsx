import React, { useState } from "react";
import "./App.css";
import ToDoForm from "../src/Components/Form";

function App() {

  // Type for array is an array of objects (tasks)
  const myList: object[] = [];

  const [toDoList, setToDoList] = useState(myList);


  interface newTask {
    task: String;
    id: Number;
    completed: Boolean;
  };

  

  function addTask(taskName: newTask["task"]) {

    const addTask = {
      task: taskName,
      id: Date.now(),
      completed: false

    }
    
    setToDoList([...toDoList, addTask]);
  }

  return (
    <div className="App">
      <ToDoForm toDoList={toDoList} />
    </div>
  );
}

export default App;
