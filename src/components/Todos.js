import { useEffect } from "react";
import { useValues, todos as todos_ } from "../slices";

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
