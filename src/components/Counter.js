import { useEffect } from "react";
import store from "../stores/store";
import { name } from "../stores/counter";

const { useActions, useValues } = store;

const Counter = () => {
  const {
    [name]: { increment, decrement, equal },
  } = useActions();
  const {
    [name]: { count },
  } = useValues(name);
  useEffect(() => {
    console.log("Counter rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
      {count}
    </div>
  );
};

export default Counter;
