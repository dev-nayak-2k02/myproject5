import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("");
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
