import React, { useState } from "react";

interface Props {
    toDoList: object[]
}

function ToDoForm({toDoList}: Props) {

// State handling input change 
  const [addTask, setAddTask] = useState('');

    const onSubmit = (e: any) => {
    setAddTask(addTask);

    e.preventDefault();
  };

// The type of the event object is 'ChangeEvent' 
    // Has a 'void' type of return as doesnt return anything
  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setAddTask(e.target.value);
  }

  return (
    <div>
      <h3>Your Tasks:</h3>
      
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={addTask}
          onChange={onChange}
          name="newTask"
        />

        <button type="submit">Add a Task </button>
      </form>
    </div>
  );
}

export default ToDoForm;
