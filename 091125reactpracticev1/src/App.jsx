import Effect from "./components/Effect"
function App() {
  function getImage(fn){
    fn();
  }
  return (
    <>
      
      <Effect getData = {getImage}/>
    </>
  )
}

export default App
