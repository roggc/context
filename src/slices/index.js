import {
  useValues as useCounterValues,
  useActions as useCounterActions,
} from "./counter";
import {
  useValues as useTodosValues,
  useActions as useTodosActions,
} from "./todos";
import {
  useValues as usePaxSelectorValues,
  useActions as usePaxSelectorActions,
} from "./paxSelector";
import { composeProviders } from "react-context-slices";

export const useValues = (slice) => ({
  ...useTodosValues(slice),
  ...useCounterValues(slice),
  ...usePaxSelectorValues(slice),
});

export const useActions = () => ({
  ...useCounterActions(),
  ...useTodosActions(),
  ...usePaxSelectorActions(),
});

export { slice as counter } from "./counter";
export { slice as todos } from "./todos";
export { slice as paxSelector } from "./paxSelector";

export default composeProviders();
