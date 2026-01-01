import { useState } from "react"

function MyApp(){
  const[count,setCount] = useState(0);
  function clickHandle(){
    setCount(count + 1);
  }
  return(
    
    <>
      <button onClick={()=>{clickHandle()}}>I'm a button</button>
      <h3>{count}</h3>
    </>
  )
}

function App() {
  return (
    <div>
      <h1>This is a button</h1>
      <MyApp />
      {MyApp.count}
    </div>
  )
}

export default App
