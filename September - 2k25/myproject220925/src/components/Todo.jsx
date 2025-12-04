import { useState } from "react";

export default function Todo(){
    const[todo,setTodo] = useState("")
    const[val,setVal] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setVal(e.target.value)}/>
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}