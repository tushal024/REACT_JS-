import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product_form from '../Pages/Product_form'
import Productlist from '../Pages/Productlist'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Header from '../Components/Header'

const Main_route = () => {
  return (
    <div>

    <Header/>

      <Routes>

      <Route path='/Product_form' element={<Product_form/>} >   Product_form </Route>
      <Route path='/Productlist' element={<Productlist/>} >  Productlist </Route>
      <Route path='/Login' element={<Login/>} >  Login </Route>
      <Route path='/Signup' element={<Signup/>} > Signup </Route>

      </Routes>
    </div>
  )
}

export default Main_route
