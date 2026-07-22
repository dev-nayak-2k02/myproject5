const App = ()=>{
  const Students = [
    {
      name:'dev prasanna',
      class:12,
      roll:10
    },
    {
      name:'vrigu',
      class:11,
      roll:4
    },
    {
      name:'illanjei',
      class:11,
      roll:9
    }
  ]
  return(
    <div>
      {
        Students.map((student)=>{
          return(
            <>
              <h3>name = {student.name}</h3>
              <h3>class = {student.class}</h3>
              <h3>roll = {student.roll}</h3>
            </>
          )
        })
      }
    </div>
  )
}
export default App

