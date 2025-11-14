import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList";
function App() {
  const[item,setItem] = useState([]);
  return (
    <>
      <Search setItem={setItem}/>
      <FoodList item={item}/>
    </>
  )
}

export default App
