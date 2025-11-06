import { useState } from "react"

function App() {
  const[message, setMessage] = useState('');
  const handleDataFromChild = (childData) =>{
    setMessage(childData);
  };
  return (
    <>
      <h2>Parent Component</h2>
      <p>Message from child: {message}</p>  
    </>
  )
}

export default App
