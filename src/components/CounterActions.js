import { useEffect } from "react";
import { useActions, counter } from "../slices";

const CounterActions = () => {
  const {
    [counter]: { increment, decrement, equal },
  } = useActions();
  useEffect(() => {
    console.log("CounterActions rendered");
  });
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={equal}>=</button>
    </div>
  );
};

export default CounterActions;
