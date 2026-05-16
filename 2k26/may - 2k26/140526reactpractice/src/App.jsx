import React, { useState } from "react"
import './App.css'
import { Exampler, Greetings, Welcome } from "./Exampler";
function App(){
  const[count, setCount] = useState(0);
  return(
    <>
      <Greetings/>
      <p>counter App</p>
      <button onClick={()=>setCount((prev)=>prev + 1)}>click me to increase the counter!!</button>
      <p>{count}</p>
    </>
  )
}
export default App;