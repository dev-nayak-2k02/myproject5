import { useState } from "react";
import Value from "./Value";
export default function Counter() {
  const [count, setCount] = useState(1);
  
  return (
    <>
      <Value count={count} setCount={setCount}/>
      <h1>{count}</h1>
    </>
  );
}
