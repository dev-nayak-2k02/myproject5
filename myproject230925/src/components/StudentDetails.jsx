import { useState } from "react";
export default function StudentDetails(studentData){
    const{name,roll,marks} = studentData;
    return(
        <div>
            <p>name = {name}</p>
            <p>Roll = {roll}</p>
            <p>marks = {marks.map((mark)=>{return <span key={mark}>{mark} </span>})}</p>
        </div>
    )
}