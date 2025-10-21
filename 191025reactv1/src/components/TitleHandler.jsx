import { useState } from "react";
function TitleHandler({ name }){
    const[title,setTitle] = useState();
    function addNameTitle(){
        setTitle(`${name} ${title}`);
    }
    return(
        <>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={addNameTitle}>addTitle</button>
        </>
    )
}
export default TitleHandler