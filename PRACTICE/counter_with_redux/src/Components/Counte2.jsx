import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counte2() {

    let nn= useSelector((store)=>store.second)
    let dis= useDispatch()


  return (
    <div>
        <h1>  {nn} </h1>
        <button onClick={()=>dis({type:"INCC"})}>+ </button>
        <button>-</button>
      
    </div>
  )
}

export default Counte2
