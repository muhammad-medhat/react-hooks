import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(()=>{
    fetch(url)
      .then(res=>res.json())
      .then(dt=>setData(dt))
  }, [url])
  return [data]

}
export default  useFetch