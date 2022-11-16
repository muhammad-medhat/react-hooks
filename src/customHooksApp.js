import React, { useMemo, useState } from "react";
import useArray from "./com/customHooks/useArray";
import useToggle from "./com/customHooks/useToggle";
const CustomHooksApp = () => {
  const [value, toggleValue] = useToggle(false);
  const [array,  push, update, remove, filter, clear]
  = useArray([0,1,2,3,4,5])


  return (
    <>
      <h1>custom Hooks</h1>
      <div>
        <h3>useToggle</h3>
        <button onClick={toggleValue}>{value.toString()}</button>
      </div>
      <div>
        <h3>useArray</h3>
        <h4 style={
          {
            letterSpacing: '2px'
          }
        }>{array}</h4>
        <button onClick={()=>push(6)}>push 6</button>
        <button onClick={()=>filter(x=>x%2 ==0)}>even</button>
        <button onClick={()=>filter(x=>x%2 !=0)}>odd</button>
        <button onClick={()=>remove(2)}>remove ind 2 </button>

      </div>
    </>
  );
};

export default CustomHooksApp;
