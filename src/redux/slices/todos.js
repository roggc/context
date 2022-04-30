import createSlice from "../utils/createSlice";

export const name = "todos";

const createTodosSlice = (reducer, initialState, name) => {
  const { useStateContext, ContextProvider } = createSlice(
    reducer,
    initialState,
    name
  );

  const useValues = (store) => {
    const state = useStateContext(store);
    return state || {};
  };
  return { ContextProvider, useValues };
};

const initialState = { [name]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

export default createTodosSlice(reducer, initialState, name);
