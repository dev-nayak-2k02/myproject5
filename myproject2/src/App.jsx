import StudentDetails from "./components/StudentDetails";
function App() {
  const data ={
    roll:13,
    name:'dev nayak',
    marks:[11,12,13]
  }
  return(
    <StudentDetails studentData = {data}/>
  );
}

export default App;
