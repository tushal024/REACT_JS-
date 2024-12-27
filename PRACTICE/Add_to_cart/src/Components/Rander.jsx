import React, { useState } from 'react'




function Runn(TS) {
  
    return (
                <div>
                    <h4> {TS.title} </h4>
                    <button onClick={()=>ONBT(TS)}>Add To Cart </button>
                </div>
           
    )
}

function Rander({ data }) {
    

    return Runn(data)
}



const ONBT = (idd)=>{



    console.log(idd);
    // settt(idd)
   (localStorage.setItem("data",JSON.stringify(idd)))
    // console.log(tt);
    

    
}

export default Rander
