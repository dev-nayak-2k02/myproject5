import React, { useState } from 'react'
const Counter = () => {
    const[count,setCount] = useState(0)
    function countHandler (){
        setCount(prev=>prev+1);
    }
  return (
    <div>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button onClick={countHandler}>click me</button><br /><br />
        <h2>{count}</h2>
    </div>
  )
}

export default Counter