import React from 'react'

const App = () => {
  const handleClick = () =>{
    alert('clicked Saaar!!')
  }
  const handleParameterizedFunction = (msg)=>{
    alert(msg);
  }
  // const wrapperFunction = () =>{
  //   handleParameterizedFunction('Kujo rodharooooooo');
  // }
  return (
    <>
      <div>App</div>
      <button onClick={handleClick}>click</button>
      <button onClick={()=>handleParameterizedFunction('Rodharoooo.....')}>click(param)</button>
    </>
  )
}

export default App