import { useState } from "react"
function App() {
  const [val,setVal] = useState(1)
  const [count,setCount] = useState(0)
  const handleSubmit =(e)=>{
    e.preventDefault();
    setCount(count + Number(val))    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/>
        <h1>{val}</h1>
        <button type="submit">click me to increase</button>
      </form>
    </>
  )
}

export default App
