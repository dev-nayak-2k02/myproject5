import { useState } from "react";
import TodoCount from "./todoCount";

export default function Form({todos, setTodos}) {
    const[todo, setTodo] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo('');
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">add</button>
      </form>
    </>
  );
}
