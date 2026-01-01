import StudentDetails from "./components/StudentDetails"
function App() {
  const data = {
    name: "dev nayak",
    roll: 103,
    marks: [11,23,45]
  }

  return (
    <>
      <StudentDetails studentData = {data}/>
    </>
  )
}

export default App
