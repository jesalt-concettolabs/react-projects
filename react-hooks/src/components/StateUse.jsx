import { useState } from "react";

const StateUse = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const handleIncrement = (e) => {
    setValue(e.target.value);
    if (count >= 10) {
      setError(true);
      return count;
    } else {
      setError(false);
      setCount((prev) => prev + 1);
    }
  };

  const handleDecrement = (e) => {
    setValue(e.target.value);
    if (count < 1) {
      setCount(0);
      setError(true);
    } else {
      setError(false);
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setError(false);
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button value="Decrease" className="btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button value="Increase" className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
      {error && (
        <p>
          Cannot {value} {count}
        </p>
      )}
    </div>
  );
};

export default StateUse;
