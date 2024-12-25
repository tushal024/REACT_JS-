import React, { useState } from 'react'
import Mapping from '../Components/Mapping';

function Cart() {


        let[data,setdata]=useState(JSON.parse(localStorage.getItem("data"))   )

        console.log(data);

        function del(idd){

          let n_arr= data.filter((e)=>{
            if(e.id !=idd){
                return e
            }
           
        })

        setdata(n_arr)

        }
        

  return (
    <div >
      <h1 > Cart page  </h1>
    
       {
        data.map((e)=>{
            return (  <div key={e.id} >
                    <h1>  
                        {e.name}
                    </h1>

                    <button  onClick={()=>del(e.id)} >DELETE</button>
                </div>
            )
        })
          
           
        } 
   
    <h1>
{

        // data.email
}

    </h1>
    
      .................................................................................................................................................
    </div>
  )
}

export default Cart
