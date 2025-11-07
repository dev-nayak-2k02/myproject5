import { useEffect, useState } from "react";

export default function Effect(){
    const[count, setCount] = useState(0)
    return(
        <>
            <h2>{count}</h2>
            <button onClick={setCount(count + 1)}>Add</button>
        </>
    )
}