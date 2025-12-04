import { useState } from "react";
import DataDisplay from "./DataDisplay";
function TitleHandler({ name, setName }){
    const[title,setTitle] = useState();
    function addNameTitle(){
        setTitle(title)
        setName(`${name} ${title}`);
        <DataDisplay />
    }
    return(
        <>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={addNameTitle}>addTitle</button>
        </>
    )
}
export default TitleHandler