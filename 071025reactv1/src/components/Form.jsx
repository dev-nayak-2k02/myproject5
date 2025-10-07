import { useState } from "react";

export default function Form() {
    const[todo,setTodo] = useState('')
    function handleSubmit(e){
        e.handleSubmit();
        setTodo('')
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onClick={(e)=>setTodo(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
