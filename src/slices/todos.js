import { createSlice } from "./utils";

export const slice = "todos";
const initialState = { [slice]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

export const { useValues } = createSlice(
  reducer,
  initialState,
  slice,
  (useDispatch) => () => ({ [slice]: {} })
);
