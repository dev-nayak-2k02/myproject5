import React, { useState } from "react"
import './App.css'
import { Exampler, Greetings, Welcome } from "./Exampler";
import { Counter } from "./Counter";
function App(){
  const[count, setCount] = useState(0);
  return(
    <>
      <Greetings/>
      <p>counter App</p>
      <Counter changeCounter = {setCount}/>
      <p>{count}</p>
    </>
  )
}
export default App;