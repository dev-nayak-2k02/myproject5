import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("title");
  useEffect(() => {
    async function getItemDetails() {
      let data = await fetch(``);
      let res = await data.json();
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
