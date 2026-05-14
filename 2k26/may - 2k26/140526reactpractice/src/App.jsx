import React from "react"
import './App.css'
import { Exampler, Greetings, Welcome } from "./Exampler";
export default function App(){
  return(
    <div>
      <h1>Dev Prasanna Nayak</h1>
      <ul>
        <li><Greetings/></li>
        <li><Welcome/></li>
        <li><Exampler/></li>
      </ul>
    </div>
  )
}
