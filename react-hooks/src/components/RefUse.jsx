import { useRef, useState } from "react";

const RefUse = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;
    console.log("count: ", count);
    console.log("Ref: ", countRef);
  };

  console.log("ouyside: ", count);

  return (
    <div>
      <h1>Use Ref </h1>
      <h4>Count: {count}</h4>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default RefUse;


