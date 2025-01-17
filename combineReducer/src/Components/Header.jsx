import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      
      <Link  to="/"   > Home  </Link>
      <Link  to="/product"   > product  </Link>
      <Link  to="/login"   > login  </Link>
      <Link  to="/signup"   > signup  </Link>

    </div>
  )
}

export default Header
