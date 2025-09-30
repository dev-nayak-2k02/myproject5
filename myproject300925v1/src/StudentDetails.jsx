export default function StudentDetails({ name, roll, marks }) {
  return (
    <div>
      <h1>Name = {name}</h1>
      <h1>roll = {roll}</h1>
      <h1>
        marks =
        {marks.map((mark) => {
          return <span> {mark} </span>;
        })}
      </h1>
    </div>
  );
}
