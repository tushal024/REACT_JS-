import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Rander from '../Components/Rander';

function Single_pr() {

    let {id}= useParams();
    console.log(id);
    let[data,setdata]=useState({})
    

    useEffect(()=>{

        
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((e)=>{
            return e.json();
        })
        .then((res)=>{
            console.log(res);
            setdata(res)
            
            
        })
        .catch((er)=>{
            console.log(er);
            
        })

    },[])

  return (
    <div>
            <h1>Single_pr</h1>
           <Rander  data={data} />
    </div>
  )
}

export default Single_pr
