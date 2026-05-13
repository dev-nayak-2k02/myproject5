import React from "react";
import { useState } from "react";
function App() {
  const[num,setNum] = useState(0)
  return (
    <>
      <h1>GeeCoding</h1>
      <p>this is {num}</p>
      <button onClick={()=>setNum(num+1)}>click me</button>
    </>
  )
}

export default App
