import { useState } from "react";
export default function Count(){
    const[count,setCount] = useState(0);
    const[val,setVal] = useState(1);
    function handleClick(e){
        setCount(prev=>prev+1);
        console.log(e.target)
    }
    return(
        <>
            <h1>{count}</h1>
            <input type="text" value={count} onChange={(e)=>setCount(e.target.value)}/>
            <span><button onClick={handleClick}>click</button></span>
            <br />
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <button onClick={()=>setCount(Number(count)+Number(val))}>add</button>
        </>
    )
}