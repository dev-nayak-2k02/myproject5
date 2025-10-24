import { useState } from "react";
export default function Form() {
  const [todo, setTodo] = useState("");
  function handleClick(e){
    e.preventDefault();
  }
  return (
    <>
      <form onClick={handleClick}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
