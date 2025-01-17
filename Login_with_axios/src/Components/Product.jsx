import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Product() {

  let ts= useSelector(s=>s)
    console.log(ts.isLogin);
    

    
   
   

  return (
    
    <div>
    <h1>  PRODUCT FORM   </h1>
    <form action="">

      <input   placeholder='Product Title...'  type="p_title" />    <br />
      <input   placeholder='Product Price...'  type="p_price" /> <br />
      <input   placeholder='Product  URL...'  type="p_url" /> <br />
      <input type="submit" />
    </form>
    
    </div>
  )

}

export default Product
