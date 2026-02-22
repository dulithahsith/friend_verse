import React, { useEffect, useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count is :", count);
  }, [count]);

  return (
    <div className="tutorial">
      <h1> Count is : {count} </h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
