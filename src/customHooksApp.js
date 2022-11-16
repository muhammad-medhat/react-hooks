import React, { useState, useEffect } from 'react';
import useArray from "./com/customHooks/useArray";
import useFetch from "./com/customHooks/useFetch";
import useLocalStorage from "./com/customHooks/useLocalStorage";
import useToggle from "./com/customHooks/useToggle";
import useLogger from "./com/customHooks/useLogger";
const CustomHooksApp = () => {
  
  const [storage, setStorage] = useLocalStorage('key', 'initial storage value')

  const [value, toggleValue] = useToggle(false);
  const [array,  push, update, remove, filter, clear]
  = useArray([0,1,2,3,4,5])

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
const [variable, setVariable] = useState('');
  return (
    <>
      <h1>custom Hooks</h1>
      {/*      <div>
        <h3>useFetch</h3>
        <ul>
          {data && data.map(dt =>(
            <li key={dt.id}>
              JSON.stringify(dt) 
              {dt.title}
            </li>
          ))}
        </ul>
      </div>*/}
      <div>
        <h3>useLogger</h3>
        <input
          type="text"
          name='logger'
          value={variable}
          onChange={(e) => setVariable(e.target.value)}
        />
          {variable}
        {useLogger(variable)}
      </div>
      <div>
        <h3>useToggle</h3>
        <button onClick={toggleValue}>{value.toString()}</button>
      </div>
      <div style={{border: 'solid'}}>
        <h3>useLocalStorage</h3>
        <input
          type="text"
          placeholder="Enter storage"
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
        />
        <p>value: {storage}</p>
      </div>
      <div>
        <h3>useArray</h3>
        <h4
          style={{
            letterSpacing: "2px",
          }}
        >
          {array}
        </h4>
        <button onClick={() => push(6)}>push 6</button>
        <button onClick={() => filter((x) => x % 2 == 0)}>even</button>
        <button onClick={() => filter((x) => x % 2 != 0)}>odd</button>
        <button onClick={() => remove(2)}>remove ind 2 </button>
      </div>
    </>
  );
};

export default CustomHooksApp;
