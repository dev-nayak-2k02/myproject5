import { useState } from "react"
import Search from "./components/Search"

function App() {
  const[item,setItem] = useState([]);
  return (
    <>
      <Search item={item} setItem={setItem}/>
    </>
  )
}

export default App
