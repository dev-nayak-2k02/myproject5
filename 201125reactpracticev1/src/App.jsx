import { useState } from "react";

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
