import { useEffect } from "react";
import { useValues } from "../redux/store";
import { name } from "../redux/slices/todos";

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
