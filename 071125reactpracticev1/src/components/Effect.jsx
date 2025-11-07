const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = 'ded7bbedd88a4be6b31d943077c0faac';
import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    async function getFoodData() {
        const result = await fetch (`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await result.json();
        console.log(data.results);
    }
    getFoodData();
  },[query])
  return (
    <>
      <h2>{query}</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}
