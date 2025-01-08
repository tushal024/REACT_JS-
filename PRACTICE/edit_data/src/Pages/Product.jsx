import React, { useState } from 'react'

function Product({arr}) {

    // let [o,seto]=useState(true)
    console.log(arr);


    function ed(id){
        console.log(id);
            // seto(!o)
            // console.log(o);
            

        localStorage.setItem("id",id)
        
    }
    
  return (
    <div>

    {
        arr.map((e)=>{
            return (
                <div key={e.id}>
                    {/* <h1>  {e.id} </h1> */}

                   <h3> {e.name1}  -  {e.id}  </h3>
                   <h3>  {e.price} </h3>
                   <button  onClick={()=>ed(e.id)} >   EDIT </button>
                </div>
            )
        })
    }

      <h1>   Product</h1>
    </div>
  )
}

export default Product
