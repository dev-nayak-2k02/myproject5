import { useState } from "react"
import Search from "./components/Search"
import ItemList from "./components/ItemList";

function App() {
  const[item,setItem] = useState([]);
  return (
    <>
      <ItemList item={item}/>
      <Search setItem={setItem}/>
    </>
  )
}

export default App
