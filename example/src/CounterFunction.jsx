import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Function Counter {count}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Counter;
