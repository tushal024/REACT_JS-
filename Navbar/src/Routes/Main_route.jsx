import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'
import About from"../Pages/About"


function Main_route() {
    return (
        <div>

            <Link   to="/cart" > Cart </Link>
            <Link   to="/product" > Product </Link>
            <Link   to="/About" >  About </Link>
            {/* <Link   to="/Home" >  Home </Link> */}


            <Routes>
                <Route path='/' element={<Home />}  >       </Route>
                <Route path='/cart' element={<Cart />}  >       </Route>
                <Route path='/product' element={<Product />} >       </Route>
                <Route path='/About' element={<About/>}  >       </Route>
                <Route path='*' element={  <h1> Page Not Found  </h1> }  >       </Route>


            </Routes>

        </div>
    )
}

export default Main_route
