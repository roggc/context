import { useValues, useActions } from "../slices";
import { slice as paxSelector_ } from "../slices/paxSelector";

const PaxSelector = () => {
  const { [paxSelector_]: paxSelector } = useValues(paxSelector_);
  const {
    [paxSelector_]: { increaseInfant },
  } = useActions();
  return (
    <>
      <button onClick={increaseInfant}>increase infant</button>
      <ul>
        {Object.entries(paxSelector).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default PaxSelector;
