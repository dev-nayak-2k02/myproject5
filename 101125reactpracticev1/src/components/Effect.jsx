import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("pizza");
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
