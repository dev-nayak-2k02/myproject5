let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";
import React, { useEffect, useState } from "react";
const Example = ({ setFn }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function getItems() {
      const data = await fetch(`${URL}`);
      const result = await data.json();
      setFn(result);
    }
    getItems();
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

export default Example;
