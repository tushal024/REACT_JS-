import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter3() {

    let C3= useSelector(st=>st.tt3)


    let dis= useDispatch()

    document.getElementById("")

    let[val,setval]=useState("")


    function change(e){

        let { name,value } =e.target
        setval(value)

   }

   function sub(e){
    e.preventDefault();
    console.log( Number (val));

    dis({type: "IN" ,payload: Number (val) })



   }


  return (
    <div>
        
        <form action="" onSubmit={sub}  >
        <input type="Number" name="" id=""  onChange={change} />
        <input type="submit" name="" id="" />
        </form>
        <h1>  {C3} </h1>
           
    </div>
  )
}

export default Counter3
