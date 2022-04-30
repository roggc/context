import makeStore from "../utils/makeStore";

export const name = "todos";

const makeTodoStore = (reducer, initialState, name) => {
  const { useStateContext, ContextProvider } = makeStore(
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

export default makeTodoStore(reducer, initialState, name);
