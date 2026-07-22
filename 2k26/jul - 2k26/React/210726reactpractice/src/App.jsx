import { useState } from "react";
import Display from "./Display";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="main">
        <h3>
          <Display count={count} />
        </h3>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click to increase count
        </button>
        <br />
        <button
          onClick={() => {
            count != 0 ? setCount(count - 1) : setCount(0);
          }}
        >
          click to decrease count
        </button>
      </div>
    </>
  );
};
export default App;
