import React, { useEffect, useState } from "react";
const List = ({nums}) => {
  // console.log(nums);
  const [list, setList] = useState([]);
  useEffect(()=>{
    console.log('useEffect - List...');
    setList(nums())
  }, [nums])
  return (
    <ul>
      {list.map((li, i) => (
        <li key={i}>{li}</li>
      ))}
      <li></li>
    </ul>
  );
};

export default List;