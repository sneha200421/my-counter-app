import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div
      style={{
        margin: "0 auto",
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        background: "#f4f4f4",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ color: "#FF5733" }}>Count: {count}</h2>
      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
    </div>
  );
};

export default Counter;
