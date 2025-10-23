import { useState } from "react";
function TitleHandler({ name, setName }){
    const[title,setTitle] = useState();
    function addNameTitle(){
        setTitle(title)
        setName(`${name} ${title}`);
    }
    return(
        <>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={addNameTitle}>addTitle</button>
        </>
    )
}
export default TitleHandler