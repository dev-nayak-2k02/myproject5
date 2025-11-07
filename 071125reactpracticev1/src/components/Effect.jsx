import { useEffect, useState } from "react";

export default function Effect(){
    const[count, setCount] = useState(0)
    useEffect(()=>{
        function run(){
            console.log('effect has triggered');
        }
        run()
    },[count])
    return(
        <>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>Add</button>
        </>
    )
}