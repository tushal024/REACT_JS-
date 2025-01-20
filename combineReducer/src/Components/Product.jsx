import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Product() {

  let ts= useSelector(s=>s.ProductReducer)
    

      let disp= useDispatch()

    useEffect(()=>{

        disp({type:"Loading"})
      
        axios.get('http://localhost:3000/data')
        .then((e)=>{
          console.log(e.data);
          disp({type:"Success",payload:e.data})
          console.log(ts);
          
          
        })
        .catch((er)=>{
          console.log(er);
            disp({type:"Error"})
          })

    },[])







    

    
   
   

  return (
    
    <div>
    <h1>  PRODUCT FORM   </h1>
    {/* <form action="">

      <input   placeholder='Product Title...'  type="p_title" />    <br />
      <input   placeholder='Product Price...'  type="p_price" /> <br />
      <input   placeholder='Product  URL...'  type="p_url" /> <br />
      <input type="submit" />
    </form> */}
    
    {

    }
    </div>
  )

}

export default Product
