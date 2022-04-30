import counter from "./slices/counter";
import todos from "./slices/todos";

const {
  ContextProvider: CounterProvider,
  useValues: useCounterValues,
  useActions: useCounterActions,
} = counter;
const { ContextProvider: TodosProvider, useValues: useTodosValues } = todos;

const createStore = () => {
  const ContextProvider = ({ children }) => (
    <CounterProvider>
      <TodosProvider>{children}</TodosProvider>
    </CounterProvider>
  );

  const useValues = (store) => {
    const todos = useTodosValues(store);
    const counter = useCounterValues(store);
    return { ...todos, ...counter };
  };

  const useActions = () => {
    const counter = useCounterActions();
    return { ...counter };
  };
  return { ContextProvider, useValues, useActions };
};

export default createStore();
