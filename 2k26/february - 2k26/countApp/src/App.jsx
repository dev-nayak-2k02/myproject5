import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[val, setVal] = useState(1)
  function handleChange(e){
    console.log(e.target.value);
    
  }

  return (
    <>
      <input type="text" value={val} onChange={handleChange}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + Number(val))}>increase</button>
    </>
  )
}

export default App
