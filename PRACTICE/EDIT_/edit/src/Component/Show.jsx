import React, { useState } from 'react'

function Show() {
    let[arr,setarr]=useState([])


    fetch(`http://localhost:3000/data`)
    .then((req)=>{
        return req.json();
    })
    .then((res)=>{
        // console.log(res)

        
        setarr(res)
        console.log(arr);
        
    })
    .catch((er)=>{
        console.log(er);
        
    })
  return (
    <div>
      {arr.map((e)=>{
        return (
            <div>
            <h5> {e.email} </h5>
            <h5> {e.pass} </h5>
            <button>  EDIT </button>
            </div>
        )
      })}

    </div>
  )
}

export default Show
