import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
import Navbar from '../Components/Navbar'

function Main_route() {
  return (
    <div>
      {/* <h1> Main_route  </h1> */}
      <Navbar/>

    <Routes>  
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Login' element={<Login/>} ></Route>
            <Route path='/Signup' element={<Signup/>} ></Route>
            <Route path='/Product' element={<Product/>} ></Route>
         </Routes>

    </div>
  )
}

export default Main_route
