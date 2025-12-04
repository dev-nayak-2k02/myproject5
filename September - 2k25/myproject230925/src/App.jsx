import StudentDetails from "./components/StudentDetails"
function App() {
  const name = 'dev prasanna nayak'
  const roll = 102
  const marks = [98,99,87]
  return (
    <>
      <StudentDetails name = {name} roll = {roll} marks = {marks}/>
    </>
  )
}

export default App
