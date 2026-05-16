import React from "react";
function Counter({changeCounter}){
    return(
        <>
            <button onClick={()=>changeCounter(prev=>prev+1)}>click me to change count</button>
        </>
    )
}

export {Counter}