import makeStore from "../utils/makeStore";

export const name = "counter";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const makeCounterStore = (reducer, initialState, name) => {
  const { useDispatchContext, useStateContext, ContextProvider } = makeStore(
    reducer,
    initialState,
    name
  );

  const useActions = () => {
    const dispatch = useDispatchContext();
    const increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });
    const equal = () => dispatch({ type: EQUAL });
    return { [name]: { increment, decrement, equal } };
  };
  const useValues = (store) => {
    const state = useStateContext(store);
    return state || {};
  };
  return { ContextProvider, useActions, useValues };
};

const initialState = { [name]: { count: 0 } };
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

export default makeCounterStore(reducer, initialState, name);
