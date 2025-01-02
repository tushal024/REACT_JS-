import React from 'react'
import { Links, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Product from '../Pages/Product'
import Navbar from '../Components/Navbar'
import Private from '../Components/Private'
import List from '../Components/List'
import WW from '../Pages/WW'

function Main_route() {
  return (
    <div>
      {/* <h1> Main_route  </h1> */}
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Signup' element={<Signup />} ></Route>
        <Route path='/WW/:id' element={<WW />} ></Route>


        <Route path='/Product' element={
          <Private >

            <Product />

          </Private>

        } ></Route>

        <Route path='/List' element={
          <Private >

            <List />

          </Private>

        } ></Route>
      </Routes>

    </div>
  )
}

export default Main_route
