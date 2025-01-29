import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../Components/Form'
import List from '../Components/List'

const Mainraote = () => {
  return (
    <div>
      <Routes> 
        <Route path='/'  element={<Form/>} >  </Route>
        <Route path='/List'  element={<List/>} >  </Route>
        
          </Routes>
    </div>
  )
}

export default Mainraote
