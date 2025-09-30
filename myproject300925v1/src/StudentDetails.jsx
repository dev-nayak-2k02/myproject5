export default function StudentDetails({ studentData }) {
  const { name, roll, marks } = studentData;
  return (
    <div>
      <h1>Name = {name}</h1>
      <h1>roll = {roll}</h1>
      <h1>marks = {marks}</h1>
    </div>
  );
}
