import React from "react"
import './App.css'
import { Exampler, Greetings, Welcome } from "./Exampler";
import Student from "./Student";
export default function App(){
  let name = 'Dev Nayak';
  let age = 23;
  let gender = 'Male';
  let isVoting = 'Eligible'
  function clickMessage(){
    console.log('Clicked');
  }
  return(
    <div>
      <h1>Dev Prasanna Nayak</h1>
      <ul>
        <li className="list-items"><Greetings/></li>
        <li className="list-items"><Welcome/></li>
        <li className="list-items"><Exampler/></li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
        <li>{isVoting}</li>
        <li><Student name={name} age={age} message={clickMessage}/></li>
        
      </ul>
      
    </div>
  )
}
