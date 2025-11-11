import { useEffect, useState } from "react";

export default function Search(){
    const[query, setQuery] = useState('title');
    useEffect(()=>{
        async function getItemData() {
            let data = await fetch ()
        }
        
    },[query])
    return(
        <>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </>
    )
}