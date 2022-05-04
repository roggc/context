import { useEffect } from "react";
import { useValues, useActions, paxSelector } from "../slices";

const PaxSelector = () => {
  const { [paxSelector]: paxNumber } = useValues(paxSelector);
  const {
    [paxSelector]: { increaseInfant },
  } = useActions();
  useEffect(() => {
    console.log("PaxSelector rendered");
  });
  return (
    <>
      <button onClick={increaseInfant}>increase infant</button>
      <ul>
        {Object.entries(paxNumber).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default PaxSelector;
