import { useEffect } from "react";
import store from "../stores/store";
import { name } from "../stores/counter";

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
