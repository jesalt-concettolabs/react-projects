import { useCallback, useMemo, useState } from "react";
import CallbackUse from "./CallbackUse";

const MemoUse = () => {
  const [show, setShow] = useState(false);

  const fetchData = useCallback((pow = 5) => {
    return Math.random() * 6 * pow;
  }, []);

  const id = useMemo(() => {
    return Math.random() * 10;
  }, []);

  return (
    <div className="main">
      <div>
        <CallbackUse fetchData={fetchData} />
        <h3>MemoUSE</h3>
        <h4>UniqueNumber: {id}</h4>
        <button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Reveal"}
        </button>
        <p>{show ? "Some API key" : "********"}</p>
      </div>
    </div>
  );
};

export default MemoUse;
