import createSlice from "../utils/createSlice";

export const slice = "counter";
const initialState = { [slice]: { count: 0 } };

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const reducer = (draft, action) => {
  switch (action.type) {
    case INCREMENT:
      draft[slice].count += 1;
      break;
    case DECREMENT:
      draft[slice].count -= 1;
      break;
    case EQUAL:
      draft[slice].count = draft[slice].count + 1 - 1;
      break;
    default:
      break;
  }
};

const { useDispatchContext, useStateContext, ContextProvider } = createSlice(
  reducer,
  initialState,
  slice
);

export const useActions = () => {
  const dispatch = useDispatchContext();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  return { [slice]: { increment, decrement, equal } };
};

export const useValues = (slice) => {
  const state = useStateContext(slice);
  return state || {};
};

export default ContextProvider;
