import "./App.css";
import { Exampler, Greetings, Welcome } from "./Exampler";
import { Counter } from "./Counter";
import { useState } from "react";
import Student from "./Student";
function App() {
  const [count, setCount] = useState(0);
  const dummyData = ["person 1", "person 2", "person 3"];
  return (
    <>
      <Greetings />
      <p>counter App</p>
      <Counter changeCounter={setCount} />
      <p>{count}</p>
      <Student name='sangam' age={12} message='hello there I am sangam'/>
      <ul>
        {dummyData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
