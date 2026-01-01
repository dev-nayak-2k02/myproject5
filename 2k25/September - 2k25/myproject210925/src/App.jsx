import { useState } from "react"
function App() {
  const [count,setCount] = useState(0);
  const [val,setVal] = useState(1);
  return (
    <>
      <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <h1>{count}</h1>
      <button onClick={(e)=>{
        setCount(count+Number(val))
        console.log(e)
      }}>Click to Increase</button>
    </>
  )
}

export default App
