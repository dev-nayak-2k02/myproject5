import { useState } from "react";
import TodoItem from "../../../myproject011025v1/src/components/TodoItem";
export default function Todo() {
    const[todo, setTodo] = useState("")
    const[todos, setTodos] = useState([])
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo('')
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">ADD</button>
      </form>
      {todos.map((item)=>(<TodoItem key={item} item = {item}/>))}
    </>
  );
}
