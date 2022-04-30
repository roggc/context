import { useEffect } from "react";
import { useValues } from "../redux";
import { slice as todos_ } from "../redux/slices/todos";

const Todo = () => {
  const {
    [todos_]: { todos },
  } = useValues(todos_);
  useEffect(() => {
    console.log("Todo rendered");
  });

  return <div>{todos[0].text}</div>;
};

export default Todo;
