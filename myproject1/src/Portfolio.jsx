import About from "./About";
import HeaderFunction from "./Header";
import Skill from "./Skills";

export default function Portfolio({ name, para, abt, list }) {
  return (
    <>
      <h1>Name = {name}</h1>
      <p>tag = {para}</p>
      <h2>Desc = {abt}</h2>
      <ul>
        {list.map((list) => (
          <Skill list={list} />
        ))}
      </ul>
    </>
  );
}
