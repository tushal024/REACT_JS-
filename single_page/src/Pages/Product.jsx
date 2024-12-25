import React, { useEffect, useState } from 'react'
import Mapping from '../Components/Mapping'

function Product() {

    const [arr,setarr]=useState([])


    useEffect((e)=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            // console.log(res);
            setarr(res)
            
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
        

    },[arr])

    console.log(arr);
    
  return (
    <div>

      <h1>  Product  </h1>

<Mapping  arr={arr} />
    </div>

  )
}

export default Product
