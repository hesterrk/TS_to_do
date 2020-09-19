import React from "react";
import { ProtoDotIo } from "@icons-pack/react-simple-icons";
import styled from "styled-components";

interface Props {
  item_name: string;
  didAddTask: boolean;
  toggleTask: Function;
  item_completed: boolean;
  item_id: number;
}

// If using props in a SC, have to declare the type of the prop seperately
type myDiv = {
  item_completed: Boolean;
};

const Div = styled.div<myDiv>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 100px 15px 100px 15px/15px 100px 15px 100px;
  width: 50%;
  margin: 0 auto;
  text-decoration: ${(props) => (props.item_completed ? "line-through" : null)};
`;

function Task({
  item_name,
  didAddTask,
  toggleTask,
  item_id,
  item_completed,
}: Props) {

  return (
    <div>
      {/* Icon renders only if someone has written something where didAddTask state is true */}
      {didAddTask ? (
        <Div
          item_completed={item_completed}
          onClick={() => toggleTask(item_id)}
        >
          <ProtoDotIo color={"black"} />
          <p style={{ marginLeft: 10 }}>{item_name}</p>
        </Div>
      ) : null}
    </div>
  );
}

export default Task;
