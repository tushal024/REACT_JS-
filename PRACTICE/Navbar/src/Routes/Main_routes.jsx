import React from 'react'
import { Route, Routes,Link } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import Not_Found_page from '../Components/Not_Found_page'

function Main_routes() {
  return (
    <div>

    <ul>
        <li>    <Link  to="/Home" >   Home  </Link></li>
        <li>    <Link  to="/About" >   About  </Link></li>
        <li>    <Link  to="/Product" >   Product  </Link></li>
        <li>    <Link  to="/Cart" >   Cart  </Link></li>
    </ul>
        


        <Routes>
        <Route  path='/' element={<Home/>} ></Route>
        <Route  path='/About' element={<About/>} ></Route>
        <Route  path='/Product' element={<Product/>} ></Route>
        <Route  path='/Cart' element={<Cart/>} ></Route>
        <Route  path='*' element={<Not_Found_page/>} ></Route>




        </Routes>
      
       


      
    </div>
  )
}

export default Main_routes
