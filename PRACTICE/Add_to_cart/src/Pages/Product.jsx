import React, { useEffect, useState } from 'react'
import Mapping from '../Components/Mapping';

function Product() {
    let [arr,setarr]=useState([])

    useEffect(()=>{

        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((e)=>{
            return e.json();
        })
        .then((res)=>{
            // console.log(res);
            setarr(res)
            
        })
        .catch((er)=>{
            console.log(er);
            
        })

    },[])

    console.log(arr);
    

  return (
    <div>
      <h1> Product </h1>


      <Mapping  arr={arr} />
    </div>
  )
}

export default Product
