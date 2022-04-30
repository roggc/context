import counter from "./counter";
import todos from "./todos";

const {
  ContextProvider: CounterProvider,
  useValues: useCounterValues,
  useActions: useCounterActions,
} = counter;
const { ContextProvider: TodoProvider, useValues: useTodoValues } = todos;

const makeCombinedStore = () => {
  const ContextProvider = ({ children }) => (
    <CounterProvider>
      <TodoProvider>{children}</TodoProvider>
    </CounterProvider>
  );

  const useValues = (store) => {
    const todos = useTodoValues(store);
    const counter = useCounterValues(store);
    return { ...todos, ...counter };
  };

  const useActions = () => {
    const counter = useCounterActions();
    return { ...counter };
  };
  return { ContextProvider, useValues, useActions };
};

export default makeCombinedStore();
