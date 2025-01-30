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
        
        <form action="" onSubmit={sub}  > <br />
        <input type="Number" placeholder='Multiplay By Any Number...' className='border rounded-[7px] w-[70%] border-[gray] ps-[16px] h-[30px]' name="" id=""  onChange={change} /> <br /> <br />
        <input    className='w-[150px] border border-[gray] h-[30px] font-[500] rounded-[7px] hover:border-[blue]  pointer '   type="submit" name="" id="" />
        </form>
        <h1  className='text-[30px] mt-[10px]  mb-[20px]'  >  {C3} </h1>
           
    </div>
  )
}

export default Counter3
