import { useEffect, useState } from "react";

export default function Search(){
    const[query,setQuery] = setQuery('pizza')
    useEffect(()=>{
        function demo(){
            alert('hello! there');
        }
        demo()
    },[])

    return(
        <div>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
    )
}