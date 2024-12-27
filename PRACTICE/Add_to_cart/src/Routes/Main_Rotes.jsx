import React from 'react'
import { Route, Routes } from 'react-router'
import Product from '../Pages/Product'
import Home from '../Pages/Home'
import Single_pr from '../Pages/Single_pr'
import Cart from '../Pages/Cart'
import Navbar from '../Components/Navbar'
import Not_found_page from '../Components/Not_found_page'

function Main_Rotes() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}   >Home   </Route>
      <Route path='/Home' element={<Home/>}   >Home   </Route>
      <Route path='/Product' element={<Product/>}   >Product   </Route>
      <Route path='/Single_page/:id' element={<Single_pr/>}   >Single_page</Route>
      <Route path='/Cart' element={<Cart/>}   >Cart</Route>
      <Route path='*' element={<Not_found_page/>}   >  </Route>
        </Routes>
    </div>
  )
}

export default Main_Rotes
