let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";
import { useEffect, useState } from "react";

export default function Search({ item, setItem }) {
  const [query, setQuery] = useState("title");
  useEffect(() => {
    async function getItemData() {
      let data = await fetch(`${URL}`);
      let res = await data.json();
      console.log(res[0].image);
    }
    getItemData();
  }, [query]);
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
