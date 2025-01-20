import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [T, setT] = useState(898)


  let Add = useMemo(  () => {

    console.log(T);
    return T

  },[T])

  function ss() {
    console.log(count)
  }

  return (
    <>
      <h1> {Add }  </h1>
      <h2>  {T} </h2>

      <button  onClick={()=>  setT(T+2) } >  Click 2</button>

      <button onClick={() => ss(setCount(count + 1))} > Click  </button>
    </>
  )
}

export default App
