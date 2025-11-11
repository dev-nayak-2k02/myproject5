import { useState } from "react";
import Effect from "./components/Effect";

function App() {
  const[foodData,setFoodData] = useState([]);
  return (
    <>
      <Effect foodData={foodData} setFoodData={setFoodData}/>
    </>
  );
}

export default App;
