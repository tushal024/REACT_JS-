import { useState } from 'react'


import './App.css'

import Header from './components/header'
import Section from './components/Section'
import Cart from './components/Cart'
import Foot from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Section/>
    <Cart/>
    <Foot/>
    </>
  )
}

export default App
