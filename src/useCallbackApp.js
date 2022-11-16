import React, { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import List from "./com/list";

const UseCallbackApp = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // const getList = (num) =>{}

  const getList = useCallback(() => {
    console.log("useCallbacl - Updating items fun...");
    return [number * 10, number * 20, number * 30];
  }, [number]);

  useEffect(() => {
    console.log("useEffect... isDark");
    setIsDark(isDark)
  }, [isDark]);

  const styles = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
    textAlign: "center",
    minWidth: "200px",
    minHeight: "200px",
    fontSize: "xx-large",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 1px",
  };

  return (
    <>
      <h1>useCallback Hook</h1>
      <input
        type="number"
        name="num"
        id="num"
        value={number}
        onChange={(e) => setNumber(() => parseInt(e.target.value))}
      />
      <button onClick={() => setIsDark(!isDark)}>change theme</button>
      <div style={styles}>
        <List nums={()=>getList()} />
      </div>
    </>
  );
};

export default UseCallbackApp;
