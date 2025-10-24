import { useState } from "react";

export default function Todo(){
    const[todos, setTodos]=useState([]);
    return(
        <Form todos={todos} setTodos={setTodos}/>
    )
}