import { useState } from "react";
export default function Counter() {
    const[count, setCount] = useState(1);
    const[val,setVal] = useState(1);
    function handleArithmeticAddition(){
        if(count<11){
            setCount(count + Number(val))
        } else {
            setCount(0)
        }
    }
    function handleArithmeticSubtraction(){
        if(count>-11){
            setCount(count - Number(val))
        } else {
            setCount(0)
        }
    }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleArithmeticAddition}>+</button>
      <button onClick={handleArithmeticSubtraction}>-</button>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    </>
  );
  
}
