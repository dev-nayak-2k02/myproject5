import { useState } from "react";

export default function Counter(){
    const[count,setCount] = useState(1)
    const[val,setVal] = useState(1)
    return(
        <>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={()=>{setCount(count+Number(val))}}>Add</button>
            <h1>{count}</h1>
        </>
    )
}