import { useState } from "react"

export default function FoodItem({item}){
    const[hold,setHold] = useState('');
    function handleReveal(){
        setHold(`${item.title}`);
    }
    return(
        <>
            <h1>{item.id}</h1>
            <img src={item.image} alt={item.image} />
            <p>{item.title}</p>
            <button onClick={handleReveal}>click to reveal</button>
            {hold}
        </>
        
    )
}