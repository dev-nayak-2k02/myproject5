let URL = 'https://api.spoonacular.com/recipes/complexSearch';
let API_KEY = 'ded7bbedd88a4be6b31d943077c0faac';
import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    async function getFoodData() {
        let data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        let result = await data.json();
        console.log(result.results);
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
    </>
  );
}
