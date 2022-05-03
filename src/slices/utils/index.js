import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

const createSlice = (reducer, initialState, name) => {
  const stateContext = createContext();
  const dispatchContext = createContext();

  const useStateContext = (slice) =>
    useContext(slice === name ? stateContext : {});
  const useDispatchContext = () => useContext(dispatchContext);

  const ContextProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(reducer, initialState);
    return (
      <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>
          {children}
        </dispatchContext.Provider>
      </stateContext.Provider>
    );
  };

  const useValues = (slice) => {
    const state = useStateContext(slice);
    return state || {};
  };

  return { useValues, useDispatch:useDispatchContext, ContextProvider };
};

export default createSlice;
