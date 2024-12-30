import React, { useState } from 'react'
import Login from '../Pages/Login'
import { Link } from 'react-router-dom'

function Private({children}) {
   
  return (
    <div>

           { localStorage.getItem("Tushal") == "true"  ? children : <div>
            Plese Login Your  Account🙄🙄😶😶😶
            
              <Link  to="/Login"> Go To Login </Link> </div> }

    </div>
  )
}

export default Private
