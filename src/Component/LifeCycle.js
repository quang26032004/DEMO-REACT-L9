import React, { useState } from "react";

const LifeCycle = (props) => {
  console.log("..........LifeCycle Component Rendered..........");

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>LifeCycle Component</h1>
      {/* <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Update Counter
      </button> */}
      <h1>{props.count}</h1>
    </div>
  );
};

export default LifeCycle;


//componet re-rendering lại khi:
//1. khi component cha re-render
//2. khi state hoặc props thay đổi

