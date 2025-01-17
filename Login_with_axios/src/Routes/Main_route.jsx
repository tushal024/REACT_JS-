import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Product from '../Components/Product'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Header from '../Components/Header'
import P_route from '../Components/P_route'

function Main_route() {
  return (
    <div>

    <Header/>

        <Routes>
            <Route path='/'  element={<Home/>} ></Route>
            <Route path='/product'  element={
                <P_route>
                <Product/>   
                 </P_route>
                
                
                } ></Route>
            <Route path='/login'  element={<Login/>} ></Route>
            <Route path='/signup'  element={<Signup/>} ></Route>
        </Routes>
      
    </div>
  )
}

export default Main_route
