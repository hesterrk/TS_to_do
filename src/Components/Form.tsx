import React from "react";
import styled from "styled-components";
import { AddToList } from "@styled-icons/entypo/AddToList";
import { ClearAll } from "@styled-icons/material/ClearAll";

const Div = styled.div`
  height: auto;
  padding: 20px 0 0 0;
  display: flex;
  justify-content: center;
`;

const FormDiv = styled.div`
  border: 1px solid #b993d6;
  background: #b993d6;
  border-radius: 10px;
  width: 75%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 20px 0px;
  /* box-shadow: 0 20px 50px rgba(59, 43, 91, 0.7); */
  box-shadow: 5px 5px rgba(230, 230, 250, 0.7),
    10px 10px rgba(240, 240, 260, 0.5);
  margin-bottom: 20px;
`;

const ContainDiv = styled.div`
  display: flex;
`;

const H2 = styled.h2`
  box-shadow: 5px 5px rgba(230, 230, 250, 0.7),
    10px 10px rgba(240, 240, 260, 0.5);
  color: white;
`;

const AddIcon = styled(AddToList)`
  color: #b993d6;
  border-radius: 2px;
  width: 1.4rem;
`;

const ClearIcon = styled(ClearAll)`
  color: #b993d6;
  border-radius: 2px;
  width: 1.4rem;
`;

interface Props {
  addNewTask: Function;
  addTask: string;
  setAddTask: Function;
  setDidAddTask: Function;
  clearCompleted: Function;
}

function ToDoForm({
  addNewTask,
  addTask,
  setAddTask,
  setDidAddTask,
  clearCompleted,
}: Props) {
  // The type of the event object is 'ChangeEvent'
  // Has an inferred 'void' type of return as doesnt return anything
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddTask(e.target.value);
  }

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    // have to call this function with the specific addTask state
    if (addTask.length > 0) {
      addNewTask(addTask);
      setDidAddTask(true);
    }
    setAddTask("");
  };

  return (
    <Div>
      <FormDiv>
        <H2> My Tasks </H2>

        <form>
          <ContainDiv>
            <input
              type="text"
              value={addTask}
              onChange={onChange}
              name="newTask"
              placeholder="I want to..."
            />

            <button onClick={onSubmit}>
              <AddIcon />
            </button>
            <button onClick={(e) => clearCompleted(e)}>
              <ClearIcon />
            </button>
          </ContainDiv>
        </form>
      </FormDiv>
    </Div>
  );
}

export default ToDoForm;

// @styled-icons/material/ClearAll
