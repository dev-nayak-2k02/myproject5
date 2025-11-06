import { useState } from "react";
import Child from "./Child";

export default function App(){
  const[message, setMessage] = useState('');
  const handleDataOfChild = (param)=>{
    setMessage(param)
  }
  return(
    <>
      <h2>Parent Component</h2>
      <p>message from child: {message}</p>
      <Child/>
    </>
  )
}