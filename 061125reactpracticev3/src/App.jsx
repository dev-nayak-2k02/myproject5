import { useState } from "react"
import Child from "./Child";

function App() {
  const[message, setMessage] = useState('');
  const handleDataFromChild = (childData) =>{
    setMessage(childData);
  };
  return (
    <>
      <h2>Parent Component</h2>
      <p>Message from child: {message}</p>
      <Child onSendData={handleDataFromChild}/>  
    </>
  )
}

export default App
