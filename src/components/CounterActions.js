import { useEffect } from "react";
import { useActions } from "../redux/store";
import { name } from "../redux/slices/counter";

const CounterActions = () => {
  const {
    [name]: { increment, decrement, equal },
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
