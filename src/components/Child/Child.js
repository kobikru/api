import React, { useContext } from "react";
import TodosContext from "../../context/TodosContext";

function Child() {
  const states = useContext(TodosContext);
  const [s1, sets1] = states.state1
  const [s2, sets2] = states.state2 

  return (
    <div>
      <button
        onClick={() => {
        sets1(3)
        sets2(4)
        }}
      >
        addtodo
      </button>
      <div>{s1}</div>
      <div>{s2}</div>
    </div>
  );
}

export default Child;
