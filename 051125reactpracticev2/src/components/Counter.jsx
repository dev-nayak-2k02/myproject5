import { useState } from "react"

export default function Counter(){
    const[count, setCount] = useState(0);
    function handleCounter(){
        incrementer(setCount)
    }

    function incrementer(fn){
        fn(count+1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={handleCounter}>Add</button>
        </>
    )
}