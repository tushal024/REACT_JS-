import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Product from '../Pages/Product'

function Main_route() {
  return (

    <div>

        <header>   
            <Link  to={"/"} > Home   </Link>
            <Link  to={"/About"} > About   </Link>
            <Link  to={"/Product"} > Product   </Link>
        </header>
      
        <Routes>
        <Route  path="/" element={<Home/>} >   </Route>
        <Route  path="/About" element={<About/>} >   </Route>
        <Route  path="/Product" element={<Product/>} >   </Route>

        </Routes>

    </div>
  )
}

export default Main_route
