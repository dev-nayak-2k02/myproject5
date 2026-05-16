import React from "react";
import './App.css'
function Student({name, age, message}){
    return(
        <>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <button onClick={message}>click me! to get a message</button>
        </>
    )
}
export default Student