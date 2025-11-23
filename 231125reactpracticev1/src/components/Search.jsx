let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function getQueryItems() {
        let data = await fetch(`${URL}`);
        let result = await data.json();
        
    }
    getQueryItems();
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
