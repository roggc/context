import { useEffect } from "react";
import { useValues } from "../slices";
import { slice as todos_ } from "../slices/todos";

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
