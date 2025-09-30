import StudentDetails from "./StudentDetails";
function App() {
  const name = "Dev Prasanna Nayak";
  const roll = 101
  const marks = [97,99,91];
  return (
    <>
      <StudentDetails name = {name} roll = {roll} marks = {marks}/>
    </>
  )
}

export default App
