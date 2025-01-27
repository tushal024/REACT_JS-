import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

const MainRoute = () => {
  return (
    <div>

<Link to='/Form'> Product  Form </Link> 
<Link to='/List'>  Product List </Link>
            <Routes>
            <Route path='/Form' element={<ProductForm/>}  >   </Route>
            <Route path='/List' element={<ProductList/>}  >   </Route>
            </Routes>
    </div>
  )
}

export default MainRoute
