import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../Pages/Product'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Single_page from '../Pages/Single_page'
import Nav from '../Components/nav'
import Cart from '../Pages/Cart'

function Main_route() {
  return (
    <div>
        <Nav/>

    <Routes>
        <Route path='/' element={<Home/>}   >Home</Route>
        <Route path='/Product' element={<Product/>}   >Product</Route>
        <Route path='/About' element={<About/>}   >  About </Route>
        <Route path='/Cart' element={<Cart/>}   >  About </Route>

        <Route path='/Single_page/:id' element={<Single_page/>}   >  Single Page </Route>
        <Route path='*' element={ "Page Not Found "}   >  About </Route>
        

    </Routes>
    </div>
  )
}

export default Main_route
