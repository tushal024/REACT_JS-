import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counte2 from './Counte2';

function Counter1() {

    let val= useSelector((store)=> store.one )
    console.log(val);
    
    let dd= useDispatch()

  return (
    <div>
            <h1> {val}  </h1>
            <button onClick={()=>dd({type: "INC"}) }  > +</button>
            <button  onClick={()=>dd({type:"DES"})} > - </button>



            <Counte2/>
    </div>
  )
}

export default Counter1
