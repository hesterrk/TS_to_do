import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/Form";
import ToDoList from "./Components/ToDoList";

export interface newTask {
  task: string;
  id: number;
  completed: boolean;
}
function App() {
  // Type for array is an array of newTasks
  const myList: newTask[] = [];

  const [toDoList, setToDoList] = useState(myList);

  // Checking if a task was added state type

  const initialTask: boolean = false;

  // State handling input change
  const [addTask, setAddTask] = useState("");

  const [didAddTask, setDidAddTask] = useState(initialTask);

  function addNewTask(taskName: newTask["task"]) {
    const addTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };

    setToDoList([...toDoList, addTask]);
  }

  function toggleTask(id: number) {
    const newList = toDoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    setToDoList(newList);
  }

  function clearCompleted(e: React.SyntheticEvent) {
    e.preventDefault();
    const clearTask = toDoList.filter((item) => !item.completed);
    console.log(clearTask, "clearr");
    console.log(toDoList, "in clear func");

    setToDoList(clearTask);
  }

  return (
    <div className="App">
      <ToDoForm
        addNewTask={addNewTask}
        addTask={addTask}
        setAddTask={setAddTask}
        setDidAddTask={setDidAddTask}
        clearCompleted={clearCompleted}
      />
      <ToDoList
        toDoList={toDoList}
        didAddTask={didAddTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
