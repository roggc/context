import {
  useValues as useCounterValues,
  useActions as useCounterActions,
} from "./counter";
import { useValues as useTodosValues } from "./todos";
import { composeProviders } from "./utils";

export const AppProvider = composeProviders();

export const useValues = (slice) => ({
  ...useTodosValues(slice),
  ...useCounterValues(slice),
});

export const useActions = () => ({ ...useCounterActions() });
