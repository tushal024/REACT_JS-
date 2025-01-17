import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';

function P_route({children}) {

    let ts= useSelector(s=>s)
    console.log(ts.isLogin); 

    let Navigate1= useNavigate()
   
    return (
    (
        <div>
        {  ts.isLogin ? children:  <Navigate  to="/login" /> }
        </div>
    )

  )
}

export default P_route
