let URL = 'https://api.spoonacular.com/recipes/complexSearch';
let apiKey = 'ded7bbedd88a4be6b31d943077c0faac';
import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
        async function getFoodItem() {
            
        }
  },[query])
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
