import { useState } from "react";

function App() {
  const [foodItem, setFoodItem] = useState([]);
  return(
    <>
      <Search setFoodItem={setFoodItem}/>
    </>
  )
}

export default App;
