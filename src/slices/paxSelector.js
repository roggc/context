import { createSlice } from "../lib";

export const slice = "paxSelector";
const initialState = { [slice]: { adult: 1, child: 0, infant: 0 } };
const INCREASE_INFANT = "INCREASE_INFANT";
const reducer = (draft, action) => {
  switch (action.type) {
    case INCREASE_INFANT:
      draft[slice].infant += 1;
      break;
    default:
      break;
  }
};

export const { useActions, useValues } = createSlice(
  reducer,
  initialState,
  slice,
  (useDispatch) => () => {
    const dispatch = useDispatch();
    const increaseInfant = () => dispatch({ type: INCREASE_INFANT });
    return { [slice]: { increaseInfant } };
  }
);
