import { useEffect } from "react";
import store from "../redux/store";
import { name } from "../redux/slices/counter";

const { useActions } = store;

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
