let URL = "https://fakestoreapi.com/products";
// let API_KEY = "ded7bbedd88a4be6b31d943077c0faac";
import { useEffect, useState } from "react";

export default function Effect({foodData, setFoodData}) {
  // const [item,setItem] = useState()

  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function getFoodData() {
      let data = await fetch(`${URL}`);
      let result = await data.json();
      // setItem(result.results[0].image)
      console.log(result.results[0]);
      setFoodData(result.results);
    }
    getFoodData();
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        foodData.map((foodItem)=>{
          return (

            <div key={foodItem.id}>

              <h1>{foodItem.title}</h1>
              <img src={foodItem.image} alt={foodItem.title} />
              <p>{foodItem.id}</p>
            </div>
          )
        })
      }
    </>
  );
}

// {
//   <div class="item">
//     <img src={foodData} alt="" />
//   </div>;
// }
