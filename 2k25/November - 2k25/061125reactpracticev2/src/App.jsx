import Student from "./Student"

function App() {
  const data = {
    name: 'dev',
    clas: 10,
    marks: [99,87.78,98]
  }

  return (
    <>
      <Student studentData = {data}/>
    </>
  )
}

export default App
