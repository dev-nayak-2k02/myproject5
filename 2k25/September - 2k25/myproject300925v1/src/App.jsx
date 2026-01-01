import StudentDetails from "./StudentDetails";
function App() {
  const data = {
    name : "Dev Prasanna Nayak",
    roll : 101,
    marks : [97,99,91]
  }
  return (
    <>
      <StudentDetails studentData = {data}/>
    </>
  )
}

export default App
