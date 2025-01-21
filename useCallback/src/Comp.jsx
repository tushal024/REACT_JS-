import React, { useCallback, useState } from 'react'

const Comp = () => {
        const [TS,setTS]= useState(0)
        const MD  =  useCallback(()=>{


          setTS(TS + 1)

        },[TS])   
  return (
    <div>
      {TS}
      <br />  <br />
      {
        // console.log("hello")
        console.log(TS)
        
      }

        <button  onClick={()=> MD() }  >  OKK </button>
      

    </div>
  )
}

export default React.memo( Comp)
