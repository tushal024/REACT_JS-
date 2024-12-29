import React, { useEffect, useState } from 'react'
import Mapping from '../Components/Mapping';
import Show from './Show';

function Product() {

    let[ss,setss]= useState([])
    let[ob,setob]=useState({
        title:"",
        img:"",
        price:""

    })

// useEffect(()=>{
//     fetch(`http://localhost:3000/data`)
//     .then((r)=>{
//         return r.json();
//     })
// },[])



function change1(e){
    let {name,value} = e.target

        setob({...ob,[name]:value})
        // console.log(ob);
        }

    function subb(e){
        e.preventDefault()

        fetch(`http://localhost:3000/data`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },

            body:JSON.stringify(ob)

        })
        .then((r)=>{
            return r.json();
        })
        .then((res)=>{
            console.log(res)
            // setss([...ss,res])
         

        })
        .catch((er)=>{
            console.log(er);

            
        })
    
    }
    console.log(ss);
    

  return (
    <div>
        <h1> Add  Product </h1>
        <form action="" onSubmit={subb}>

        <input type="text" name='title'  placeholder='Title' onChange={change1}    />    <br /><br />
        <input type="text" name='img' placeholder='Img' onChange={change1}    /> <br /><br />
        <input type="text" name='price' placeholder='Price' onChange={change1}    /> <br /><br />
        
        <input type="submit" />
        </form>

        {/* <Mapping  ss={ss} /> */}
        <Show/>
      
    </div>
  )
}

export default Product
