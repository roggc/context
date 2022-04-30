import createSlice from "../utils/createSlice";

export const name = "todos";
const initialState = { [name]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

const { useStateContext, ContextProvider } = createSlice(
  reducer,
  initialState,
  name
);

export const useValues = (store) => {
  const state = useStateContext(store);
  return state || {};
};

export default ContextProvider;
