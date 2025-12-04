import { useState } from "react"
import Search from "./components/Search";
import ItemList from "./components/ItemList";
function App() {
  const[item,setItem] = useState([]);
  return (
    <>
      <Search setItem={setItem}/>
      <ItemList item={item}/>
    </>
  )
}

export default App
