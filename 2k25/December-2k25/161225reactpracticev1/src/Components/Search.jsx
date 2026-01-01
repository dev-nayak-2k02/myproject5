import React, { useEffect, useState } from "react";
let URL =
  "https://fakestoreapi.com/products?id=integer&title=string&price=number <float>";
const Search = ({ setItems }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function getItems() {
      let data = await fetch(`${URL}`);
      let result = await data.json();
      setItems(result);
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

export default Search;
