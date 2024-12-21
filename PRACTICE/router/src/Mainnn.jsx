import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Product from './pages/Product'

function Mainnn() {
  return (
    <div>


        main
      <Routes> 
        
        <Route  path='Home' element={ <Home/> } ></Route>
        <Route  path='Product' element={  <Product/> } ></Route>

      

          </Routes>
    </div>
  )
}

export default Mainnn
