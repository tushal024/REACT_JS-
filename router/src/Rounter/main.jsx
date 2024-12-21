import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../pages/product'
import Home from '../pages/home'
import About from '../pages/about'


 function Main_R() {
    return (
        <div>
                <h1> hwllo </h1>   
         <Routes>
                <Route path='product' element={<Product />} ></Route>
                <Route path='home' element={<Home />} ></Route>
                <Route path='about' element={<About />} ></Route>
            </Routes>

        </div>
    )
}

export default Main_R


