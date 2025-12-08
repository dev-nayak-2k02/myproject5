import React, { useState } from 'react'
const Counter = () => {
    const[count,setCount] = useState(0)
    function countHandler (){
        setCount(prev=>prev++);
    }
  return (
    <div>
        <button onClick={countHandler}>click me</button>
        {count}
    </div>
  )
}

export default Counter