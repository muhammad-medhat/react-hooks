import React, { useState, useEffect } from "react";

const getStorage = (key, initialValue) => {
  // debugger
  const ret = JSON.parse(localStorage.getItem(key));
  

  if (initialValue instanceof Function) return initialValue();
  if (ret) return ret;
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  // console.log(`init ${key}: ${initialValue}`);
  const [value, setValue] = useState(() => {
    return getStorage(key, initialValue);
  });
  useEffect(() => {

      localStorage.setItem(key, JSON.stringify(value));
  
  }, [value]);
  return [value, setValue];
};
export default useLocalStorage;
