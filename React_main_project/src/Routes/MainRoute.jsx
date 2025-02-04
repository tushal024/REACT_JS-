import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import RecipeList from '../Components/RecipeList'
import RecipeForm from '../Components/RecipeForm'

const MainRoute = () => {
  return (
    <div>
      
            <Routes>
            <Route  path='/' element={<Home/>}  ></Route>
            <Route  path='/Navbar' element={<Navbar/>}  ></Route>
            <Route  path='/RecipeList' element={<RecipeList/>}  ></Route>
            <Route  path='/RecipeForm' element={<RecipeForm/>}  ></Route>
            </Routes>

    </div>
  )
}

export default MainRoute
