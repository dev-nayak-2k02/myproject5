import Effect from "./components/Effect"
function App() {
  function getImage(param){
    console.log(param)
  }
  return (
    <>
      
      <Effect getData = {getImage}/>
    </>
  )
}

export default App
