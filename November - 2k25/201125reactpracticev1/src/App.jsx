import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodItem, setFoodItem] = useState([]);
  return(
    <>
      <Search setFoodItem={setFoodItem}/>
      <FoodList foodItem={foodItem}/>
    </>
  )
}

export default App;
