import { createSlice } from "react-context-slices";

export const slice = "todos";
const initialState = { [slice]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

export const { useValues, useActions } = createSlice(
  reducer,
  initialState,
  slice,
  (useDispatch) => () => ({ [slice]: {} })
);
