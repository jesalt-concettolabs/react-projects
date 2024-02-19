import React, { memo, useEffect, useState } from "react";

const CallbackUse = memo(function CallbackUse({ fetchData }) {
  console.log("I am useCallBack");
  const [num, setNum] = useState("");

  useEffect(() => {
    setNum(fetchData());
    console.log("Effect log");
  }, [fetchData]);

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "5px",
        borderRadius: "5px",
      }}
    >
      <h1>UseCallBacks</h1>
      <p>{num}</p>
    </div>
  );
});

export default CallbackUse;
