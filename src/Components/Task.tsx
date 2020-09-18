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

// interface TheseOnes {
//   item_completed: Boolean
// }

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
  border-radius: 100px 15px 100px 15px/15px 100px 15px 100px;
  width: 50%;
  margin: 0 auto;
`;

function Task({
  item_name,
  didAddTask,
  toggleTask,
  item_id,
  item_completed,
}: Props) {
  console.log(item_completed, "toggling");

  return (
    <div>
      {/* Icon renders only if someone has written something where didAddTask state is true */}
      {didAddTask ? (
        <Div onClick={() => toggleTask(item_id)}>
          <ProtoDotIo color={"black"} />
          <p style={{ marginLeft: 10 }}>{item_name}</p>
        </Div>
      ) : null}
    </div>
  );
}

export default Task;
