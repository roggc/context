import createSlice from "../utils/createSlice";

export const name = "counter";
const initialState = { [name]: { count: 0 } };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const reducer = (draft, action) => {
  switch (action.type) {
    case INCREMENT:
      draft[name].count += 1;
      break;
    case DECREMENT:
      draft[name].count -= 1;
      break;
    case EQUAL:
      draft[name].count = draft[name].count + 1 - 1;
      break;
    default:
      break;
  }
};

const { useDispatchContext, useStateContext, ContextProvider } = createSlice(
  reducer,
  initialState,
  name
);

export const useActions = () => {
  const dispatch = useDispatchContext();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  return { [name]: { increment, decrement, equal } };
};

export const useValues = (store) => {
  const state = useStateContext(store);
  return state || {};
};

export default ContextProvider;
