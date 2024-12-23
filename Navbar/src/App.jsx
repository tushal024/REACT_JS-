import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main_route from './Routes/Main_route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main_route/>
    </>
  )
}

export default App
