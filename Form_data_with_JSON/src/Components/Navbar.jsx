import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-evenly m-[auto] w-[60%] '>
      <Link  to="/"   >  <p className="aa">   Home  </p> </Link>
      <Link  to="/Login"    >  <p className="aa"> Login     </p>  </Link>
      <Link  to="/Signup"   >  <p className="aa">  Signup     </p>   </Link>
      <Link  to="/Product"  >  <p className="aa">  Product Form     </p>    </Link>
      {/* <Link to="/WW">  OK     </Link> */}

      <Link  to="/List"   > List </Link>
    </div>
  )
}

export default Navbar




