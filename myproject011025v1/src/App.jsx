import { useState } from "react"
import TodoItem from "./components/TodoItem";

function App() {
  const[todo,setTodo] = useState("")
  const[todos,setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    setTodos([...todos,todo]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">ADD</button>
      </form>
      {todos.map((item)=>(
        <TodoItem key = {item} item = {item}/>
      ))}
      {console.log(todos)
      }
    </>
  )
}

export default App
