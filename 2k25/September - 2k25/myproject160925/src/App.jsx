import { useState } from "react";
function App(){
  const[count,setCount] = useState(0)
  const[val,setVal] = useState(1)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCount(count + Number(val));
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={val}
        onChange={(e)=>setVal(e.target.value)}/>

        <h1>{count}</h1>
        <button type="submit">Increase</button>
      </form>
    </>
  )
}

export default App