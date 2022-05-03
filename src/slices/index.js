import {
  useValues as useCounterValues,
  useActions as useCounterActions,
} from "./counter";
import { useValues as useTodosValues } from "./todos";
import {
  useValues as usePaxSelectorValues,
  useActions as usePaxSelectorActions,
} from "./paxSelector";
import { composeProviders } from "./utils";

export const useValues = (slice) => ({
  ...useTodosValues(slice),
  ...useCounterValues(slice),
  ...usePaxSelectorValues(slice),
});

export const useActions = () => ({
  ...useCounterActions(),
  ...usePaxSelectorActions(),
});

export default composeProviders();
