import { useEffect, useState } from "react";

const StateEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("initial count hook rendered: ", count);
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    console.log("After settimeout:", count);
  }, [count]);

  console.log("updated count: ", count);

  return (
    <div>
      <h1>UseEffect Example</h1>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default StateEffect;
