import React from 'react'
import { Link } from 'react-router'


function Nav() {
  return (
    <div>
        <Link to="" ></Link>
        <Link to="/Product" >Product</Link>
        <Link to="/About" >  About </Link>
        <Link to="/Cart" > Cart </Link>
        <Link to="/Single_page/:id" >  Single Page </Link>


      
    </div>
  )
}

export default Nav
