import React from "react";
import Task from "./Task";
import { newTask } from "../App";

interface Props {
  toDoList: newTask[];
  didAddTask: boolean;
  toggleTask: Function;
}

function ToDoList({ toDoList, didAddTask, toggleTask }: Props) {
  return (
    <div>
      {toDoList.map((item: newTask, index: number) => (
        <Task
          key={index}
          item_name={item.task}
          item_completed={item.completed}
          item_id={item.id}
          didAddTask={didAddTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default ToDoList;
