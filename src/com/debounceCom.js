import React, { useEffect, useState } from "react";
import useDebounce from "./customHooks/useDebounce";
const DebounceCom = () => {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])
  
    return (
      <div>
        <h3>useDebounce</h3>

        <div>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    )
  
 };

export default DebounceCom;