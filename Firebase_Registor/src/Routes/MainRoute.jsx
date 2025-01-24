


import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const MainRoute = () => {
  return (
    <div>

<Link to="/login"   > Login   </Link>
<Link to="/Signup"   > Signup   </Link>
        
        <Routes>

        <Route path='/login' element={<Login/>} >  </Route>
        <Route path='/Signup' element={<Signup/>} >  </Route>
        </Routes>

    </div>
  )
}

export default MainRoute
