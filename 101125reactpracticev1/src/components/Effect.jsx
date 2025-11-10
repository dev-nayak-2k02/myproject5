let URL = 'https://api.spoonacular.com/recipes/complexSearch';
let API_KEY = 'ded7bbedd88a4be6b31d943077c0faac';
import { useEffect, useState } from "react";

export default function Effect() {
    let data,result,item;
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    async function getFoodData() {
        data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        result = await data.json();
        item = result.results[0].id;
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
        <h1>{item}</h1>
      }
    </>
  );
}
