let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";
import { useEffect, useState } from "react";

export default function Search({ item, setItem }) {
  const [query, setQuery] = useState("title");
  useEffect(() => {
    async function getItemData() {
      let data = await fetch(`${URL}`);
      let res = await data.json();
      setItem(res);
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
      {
        item.map((item)=>(
            <div key={item.id}>
                <h1>{}</h1>
            </div>
        ))
      }
    </>
  );
}
