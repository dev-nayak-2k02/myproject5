import { useState } from "react"
import TitleHandler from "./TitleHandler";

export default function FirstNameHandler(){
    const[name,setName] = useState('');
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button>Add</button>
            <h3>{name}</h3>
            <TitleHandler name={name} setName={setName}/>
        </>
    )
}