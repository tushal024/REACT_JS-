import React, { useState } from 'react'
import Login from '../Pages/Login'
import { Link } from 'react-router-dom'

function Private({children}) {
   
  return (
    <div>

           { localStorage.getItem("Tushal") == "true"  ? children : <div  className='text-center mt-[20%]' >
           First, Plese Login Your  Account🙄....?
            
              <Link  to="/Login"> <p  className='hover:underline hover:text-[blue]'> Go To Login  </p> </Link> </div> }

    </div>
  )
}

export default Private
