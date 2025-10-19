import { useState } from "react"

export default function FirstNameHandler(){
    const[name,setName] = useState('');
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button>Add</button>
            {name}
        </>
        
    )
}