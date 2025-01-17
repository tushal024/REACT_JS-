import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './Components/Counter1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Counter1/>     
    </>
  )
}

export default App
