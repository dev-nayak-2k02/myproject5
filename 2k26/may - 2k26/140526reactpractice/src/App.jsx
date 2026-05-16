import React, { useState } from "react"
import './App.css'
import { Exampler, Greetings, Welcome } from "./Exampler";
function App(){
  const[count, setCount] = useState(0);
  return(
    <>
      <Exampler/>
      <p><b>counter App</b></p>
      <button onClick={setCount((prev)=>prev + 1)}></button>
      <p>{count}</p>
    </>
  )
}
export default App;