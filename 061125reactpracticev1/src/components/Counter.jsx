import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);
    const[val, setVal] = useState(1);
    return(
        <>
            <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <h3>{count}</h3>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={(e)=>setCount(count + Number(val))}>Add</button>
        </>
    )
}