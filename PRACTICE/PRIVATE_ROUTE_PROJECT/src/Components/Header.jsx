import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/Product_form">  Product_form  </Link>  <br />
      <Link to="/Productlist">  Productlist  </Link>  <br />
      <Link to="/Login">   Login </Link>  <br />
      <Link to="/Signup">   Signup </Link>

    </div>
  )
}

export default Header
