import { useEffect, useState } from "react";

let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";

export default function Search() {
  const [query, setQuery] = useState("title");
  useEffect(() => {
    async function getQueryData() {
      let data = await fetch(`${URL}`);
      let result = await data.json();
    }
    getQueryData();
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
