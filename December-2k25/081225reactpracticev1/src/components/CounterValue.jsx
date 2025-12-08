import React, { useState } from 'react'
const CounterValue = () => {
    const[count, setCount] = useState(0)
    const[val, setVal] = useState(1)
    function handleClick(){
        setCount(prev=>prev + 1);
    }
  return (
    <div>
        <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button onClick={handleClick}>click me</button>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>setCount(Number(count) + Number(val))}>click for add</button>
    </div>
  )
}

export default CounterValue