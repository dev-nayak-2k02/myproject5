import { useState } from "react";

export default function FoodDisplay({ item }) {
  const [message, setMessage] = useState("");
  function handleDisplay() {
    setMessage(item.description);
    console.log("consoole dispaly please watch");
  }
  return (
    <>
      <div>
        <h1>{item.id}</h1>
        <h2>{item.title}</h2>
        <img src={item.image} alt={item.image} />
        <p>{item.description}</p>
        <button onClick={handleDisplay}>Add</button>
      </div>
      {message}
    </>
  );
}
