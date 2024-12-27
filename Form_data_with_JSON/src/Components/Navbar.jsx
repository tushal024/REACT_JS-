import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link  to="/"   >Home</Link>
      <Link  to="/Login"   >Login</Link>
      <Link  to="/Signup"   > Signup </Link>
      <Link  to="/Product"   > Product </Link>
    </div>
  )
}

export default Navbar




