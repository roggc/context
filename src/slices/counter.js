import { createSlice } from "./utils";

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

export const { useDispatch, useValues } = createSlice(
  reducer,
  initialState,
  slice
);

export const useActions = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });
  const equal = () => dispatch({ type: EQUAL });
  return { [slice]: { increment, decrement, equal } };
};
