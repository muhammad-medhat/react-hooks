import React, { useMemo, useState } from "react";
const UseMemoApp = () => {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const styles = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000",
    textAlign: 'center',
    minWidth: '200px',
    minHeight:'200px',
    fontSize: 'xx-large',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',     
    border:'solid 1px',
  };
  function slow(num) {
    let ret = 0;
    while (ret < 1000000000) {
      ret++;
    }
    return ret * num;
  }
  // const x = slow(number)
  const x = useMemo(() => {
    return slow(number);
  }, [number]);
  return (
    <>
      <h1>useMemo Hook</h1>
      <input
        type="number"
        name="num"
        id="num"
        value={number}
        onChange={(e) => setNumber(()=>parseInt(e.target.value))}
      />
      <button onClick={()=>setIsDark(!isDark)}>change theme</button>
      <div style={styles}>{x}</div>
    </>
  );
};

export default UseMemoApp;
