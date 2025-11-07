import { useEffect, useState } from "react";

export default function Effect() {
  const [query, setQuery] = useState("pizza");
  useEffect(()=>{
    function demo(){
        console.log('Effect has occured');
    }
    demo();
  },[query])
  return (
    <>
      <h2>{query}</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
}
