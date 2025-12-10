let URL = "https://api.spoonacular.com/recipes/complexSearch";
let API_KEY = "ded7bbedd88a4be6b31d943077c0faac";
import React, { useEffect, useState } from "react";
const Search = ({ setItems }) => {
  const [query, setQuery] = useState("pasta");
  useEffect(() => {
    async function getFoodData() {
      let data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      let res = await data.json();
      console.log(res)
      setItems(res);
    }
    getFoodData();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
