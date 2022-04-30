import CounterProvider, {
  useValues as useCounterValues,
  useActions as useCounterActions,
} from "./slices/counter";
import TodosProvider, { useValues as useTodosValues } from "./slices/todos";

const ContextProvider = ({ children }) => (
  <CounterProvider>
    <TodosProvider>{children}</TodosProvider>
  </CounterProvider>
);

export const useValues = (store) => {
  const todos = useTodosValues(store);
  const counter = useCounterValues(store);
  return { ...todos, ...counter };
};

export const useActions = () => {
  const counter = useCounterActions();
  return { ...counter };
};

export default ContextProvider;
