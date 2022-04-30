import { useEffect } from "react";
import store from "../redux/store";
import { name } from "../redux/slices/todos";

const { useValues } = store;

const Todo = () => {
  const {
    [name]: { todos },
  } = useValues(name);
  useEffect(() => {
    console.log("Todo rendered");
  });

  return <div>{todos[0].text}</div>;
};

export default Todo;
