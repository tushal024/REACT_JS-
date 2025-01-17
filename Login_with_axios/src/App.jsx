import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Main_route from './Routes/Main_route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>  Signup Form </h1>
      <Signup/> <br /><br /><br />
    <h1>  Login Form </h1>

      <Login/> */}
      <Main_route/>
    </>
  )
}

export default App
