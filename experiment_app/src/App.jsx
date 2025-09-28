import Student from "./components/Student";
function App() {
  let name = "Ram Roy";
  let age = 32;
  let gender = "male";
  let isVoting = true;
  let height = 6.1;
  return (
    <>
      <Student name={name} age={age} gender={gender} voting={isVoting} height={height}/>
    </>
  );
}

export default App;
