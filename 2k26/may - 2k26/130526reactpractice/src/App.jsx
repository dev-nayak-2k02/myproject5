import React from "react";
import Greetings from "./Greetings";
import { Welcome } from "./Greetings";
function App(){
  return(
    <>
      <Welcome/>
      <h1>hello there,</h1>
      <p><Greetings/> and I'm revising React to get better at it</p>
    </>
  )
}
export default App