import { useState } from "react";

export default function Value({ count, setCount }) {
  const [val, setval] = useState(0);
  return (
    <>
      <input type="text" value={val} onChange={(e) => setval(e.target.value)} />
      <button
        onClick={() => {
          setCount(count + Number(val));
        }}
      >
        Add
      </button>
    </>
  );
}
