import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div>
            <ul>
                <li>  <Link  to="/Home" >Home</Link> </li>
                <li>  <Link  to="/Product" >Product</Link> </li>
                <li>  <Link  to="/Single_page/:id" >Single Page</Link> </li>
                <li>  <Link  to="/Cart" >Cart</Link> </li>

                

            </ul>
    </div>
  )
}

export default Navbar
