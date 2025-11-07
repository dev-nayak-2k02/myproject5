import { useEffect, useState } from "react";

export default function Effect(){
    const[count, setCount] = useState(0)
    useEffect(()=>{
        ()=>{
            console.log('Effect is triggered');
        }
    },[count])
    return(
        <>
            <h2>{count}</h2>
            <button onClick={setCount(prev=>prev+1)}>Add</button>
        </>
    )
}