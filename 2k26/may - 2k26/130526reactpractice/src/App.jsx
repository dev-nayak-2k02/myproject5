import React from "react";
import Greetings from "./Greetings";
import { Welcome } from "./Greetings";
function App(){
  let name = "Dev Nayak";
  let age = 23;
  let gender = 'male'
  let isVoting = 1;
  return(
    <>
      <Welcome/>
      <h1>hello there,</h1>
      <p><Greetings/> and I'm revising React to get better at it</p>
      <ul>
        <li>name:{name}</li>
        <li>age:{age}</li>
        <li>gender:{gender}</li>
        <li>voting:{Boolean(isVoting).toString()}</li>
      </ul>
    </>
  )
}
export default App