
import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header'

const Routes = () => {
  return (
    <div>
                <Routes>
                    <Route  path='/' element={<Header/>} >Home</Route>
                    <Route  path='/' element={<Header/>} >Home</Route>
                    <Route  path='/' element={<Header/>} >Home</Route>
                </Routes>

    </div>
  )
}

export default Routes
