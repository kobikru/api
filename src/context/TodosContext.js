import { createContext, useState } from "react";

export const todos = [
  { title: "t1", id: 1, checked: false },
  { title: "t2", id: 2, checked: false },
];

export const useStateManage = () => {
  const state1 = useState(1);
  const state2 = useState(2);

  const x = () => {
    const z = {
        dasfdS:1,

        asdas:               "sad",
    }
  }

  return {
    state1,

    state2,
  };
};

export default createContext();
