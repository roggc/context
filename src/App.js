import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Todos from "./components/Todos";
import PaxSelector from "./components/PaxSelector";
import {AppProvider} from "./slices";

function App() {
  return (
    <AppProvider>
      <Counter />
      <CounterActions />
      <Todos />
      <PaxSelector />
    </AppProvider>
  );
}

export default App;
