let URL = 'https://fakestoreapi.com/products?id=integer&title=string&price=number <float>';
import { useEffect, useState } from "react";

export default function Search({setItem}) {
  const [query, setQuery] = useState("title");
  useEffect(() => {
    async function getItemDetails() {
      let data = await fetch(`${URL}`);
      let res = await data.json();
      setItem(res);
    }
    getItemDetails();
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
