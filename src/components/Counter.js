import { useEffect } from "react";
import {useActions,useValues} from "../redux/store";
import { name } from "../redux/slices/counter";

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
