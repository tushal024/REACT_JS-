import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main_routes from './Routes/Main_routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main_routes/>
    </>
  )
}

export default App
