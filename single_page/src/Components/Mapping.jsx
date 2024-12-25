import React from 'react'
import { Link } from 'react-router'

function Mapping({arr}) {

  return (
    <div >
            {arr.map((e)=>{
                
                return  <div key={e.id}>  <Link to={`/Single_page/${e.id}`}>  <div key={e.id}>
                
                <h1>  {e.name} </h1>
                <h1>  {e.email} </h1>
                ......................................
                </div></Link>
                </div>
                
            })}
    </div>
  )
}

export default Mapping
