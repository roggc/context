import createSlice from "./utils";

export const slice = "todos";
const initialState = { [slice]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

 const { useValues, ContextProvider } = createSlice(
  reducer,
  initialState,
  slice
);

export {useValues}

export default ContextProvider