import { useState } from "react"
import Search from "./components/Search"
function App() {
  const[Item,setItem] = useState([]);
  return (
    <>
      <Search setItem={setItem}/>
    </>
  )
}

export default App
