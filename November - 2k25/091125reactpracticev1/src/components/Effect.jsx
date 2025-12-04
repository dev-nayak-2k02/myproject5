let URL = "https://api.spoonacular.com/recipes/complexSearch";
let API_KEY = "ded7bbedd88a4be6b31d943077c0faac";
import { useEffect, useState } from "react";

export default function Effect({ getData }) {
  const [query, setQuery] = useState("pizza");
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    async function getFoodData() {
      let res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      let data = await res.json();
      console.log(data.results[0].image)
      setDatas(data.results[0].image)
    }
    getFoodData();
  }, [query]);

  function returnData() {
    getData(datas);
  }
  
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={returnData}>Add</button>
    </>
  );
}
