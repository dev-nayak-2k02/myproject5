let URL = 'https://api.spoonacular.com/recipes/complexSearch';
let API_KEY = 'ded7bbedd88a4be6b31d943077c0faac';
import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("pizza");

  useEffect(()=>{
    async function getFoodData() {
        let res = await fetch(`${URL}`)
    }
  },[])
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
