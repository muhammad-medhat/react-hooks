import React, { useEffect, useState } from "react";
import useTimeout from "./customHooks/useTimeout";
const TimeoutCom = () => {
  const [count, setCount] = useState();
  const { clear, reset } = useTimeout(() => setCount(0), 5000);
  return (
    <>
      <h3>usetimeout</h3>

      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </>
  );
};

export default TimeoutCom;
