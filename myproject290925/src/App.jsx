import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  );
}

function NameList() {
  const [list, setList] = useState(["jack", "jones", "harry"]);
  const [name, setName] = useState("");

  const addName = () => {
    // list.push(name);
    setList([...list,name])
    setName("")
  };

  return (
    <div>
      <ul>
        {list.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add</button>
    </div>
  );
}
function App() {
  return (
    <>
      <Counter />
      <NameList />
    </>
  );
}

export default App;
