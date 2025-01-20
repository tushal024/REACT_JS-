import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './Comp'

function App() {
  const [count, setCount] = useState(0)
  const fun=()=>{
    console.log("Change...");
    
  }

  return (
    <>
    <Comp/>
    <h1>  {count} </h1>
    <button  onClick={()=> fun( setCount(count +1))} >  Click </button>

    </>
  )
}

export default App
