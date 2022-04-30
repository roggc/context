import createSlice from "../utils/createSlice";

export const slice = "todos";
const initialState = { [slice]: { todos: [{ text: "todo1" }] } };
const reducer = () => {};

const { useStateContext, ContextProvider } = createSlice(
  reducer,
  initialState,
  slice
);

export const useValues = (slice) => {
  const state = useStateContext(slice);
  return state || {};
};

export default ContextProvider;
