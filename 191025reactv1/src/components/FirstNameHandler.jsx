import { useState } from "react"
import TitleHandler from "./TitleHandler";
import DataDisplay from "./DataDisplay";

export default function FirstNameHandler(){
    const[name,setName] = useState('');
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button>Add</button>
            <TitleHandler name={name} setName={setName}/>
            <DataDisplay name={name}/>
        </>
    )
}