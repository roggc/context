import { useEffect } from "react";
import { useActions, useValues } from "../slices";
import { slice as counter } from "../slices/counter";

const Counter = () => {
  const {
    [counter]: { increment, decrement, equal },
  } = useActions();
  const {
    [counter]: { count },
  } = useValues(counter);
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
