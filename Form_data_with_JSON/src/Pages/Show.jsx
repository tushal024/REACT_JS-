import React, { useEffect, useState } from 'react'

function Show() {
    
    const[AA,setAA]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((r)=>{
            return r.json();
        })
        .then((res)=>{
            // console.log(res)
            // setss([...ss,res])
            setAA(res)
         

        })
        .catch((er)=>{
            console.log(er);

            
        })

    },[AA])

    // console.log(AA);
    

  return (
    <div>
      {AA.map((e)=>{
        return (
            <div key={e.id}>
                 <h5> {e.img} </h5>
                            <h5> {e.title} </h5>
                            <h3> {e.price} </h3>

            </div>
        )
      })}

    </div>
  )
}

export default Show
