import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Todos from "./components/Todos";
import {AppProvider} from "./slices";

function App() {
  return (
    <AppProvider>
      <Counter />
      <CounterActions />
      <Todos />
    </AppProvider>
  );
}

export default App;
