import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

const makeStore = (reducer, initialState, name) => {
  const stateContext = createContext();
  const dispatchContext = createContext();

  const useStateContext = (store) =>
    useContext(store === name ? stateContext : {});
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
  return { useStateContext, useDispatchContext, ContextProvider };
};

export default makeStore;
