import { useState } from "react";
import Form from "./Form";
export default function Todo(){
    const[Todos,setTodos] = useState([])

    return(
        <>
            <Form todos={todos} setTodos={setTodos}/>
        </>
    )
}