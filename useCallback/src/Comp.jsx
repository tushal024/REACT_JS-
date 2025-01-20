import React, { useState } from 'react'

const Comp = () => {
        const [TS,setTS]= useState("HAR HAR MAHADEV...")
        const MD= ()=>{
            console.log("MMMMMMM");
            
        }

  return (
    <div>
      {TS}
      <br />  <br />

        <button  onClick={()=> MD()  }  >  OKK </button>
      
    </div>
  )
}

export default Comp
