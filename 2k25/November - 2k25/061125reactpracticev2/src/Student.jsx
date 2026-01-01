export default function Student({ studentData }) {
  const { name, clas, marks } = studentData;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>class: {clas}</h2>
      <ul>
        {marks.map((res) => {
          return <li key={res}>{res}</li>;
        })}
      </ul>
    </div>
  );
}
