import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import TodoCount from "./todoCount";

export default function Todo(){
    const[todos, setTodos] =useState([])
    return(
        <>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
            <TodoCount todos={todos}/>
        </>
    )
}