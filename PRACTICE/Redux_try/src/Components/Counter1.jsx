import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter1() {

    let v= useSelector((store)=>{
        return store
    })

    let ad =  useDispatch()


    console.log(ad);
    

  return (
    <div>
      <h1> {v}  </h1>
      <button onClick={()=>ad({type:"one"}) } > ADDDD </button>
    </div>
  )
}

export default Counter1
