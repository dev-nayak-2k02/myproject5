let URL = 'https://api.spoonacular.com/recipes/complexSearch';
let API_KEY = '358ac2f11c4c40759687f76810d9449f';
import { useEffect, useState } from "react";

export default function Effect() {
  const [item,setItem] = useState() 
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    async function getFoodData() {
        let data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        let result = await data.json();
        setItem(result.results[0].image)
        console.log(result.results[0])
    }
    getFoodData()
  },[query])

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {
        <div class='item'>
          <img src={item} alt="" />
        </div>
      }
    </>
  );
}
