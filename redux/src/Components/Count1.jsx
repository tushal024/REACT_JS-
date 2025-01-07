import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Count1() {

    const ans= useSelector(Store=>Store.CC2)
    const ans1= useDispatch()
    // console.log(ansst);
    
    


    function  Upp1(){
        ans1({ type:"INC"})
    }
    

    function  Doww1(){
        ans1({type:"DES"})
    }

  return (
    <div>


   
<div className='border w-[200px] flex rounded-[10px]  justify-center  items-center p-[10px]'>
        <button  onClick={Upp1} className='border w-[40px] rounded-[7px] me-[5px]  font-[800] ' > +  </button>
        <h1 className='w-[60px] text-[30px] rounded-[7px] border h-[]' > {ans}  </h1>
        <button onClick={Doww1}  className='border w-[40px] rounded-[7px]  ms-[5px]  font-[800] '  >  - </button>

        </div>

      

    </div>
  )
}

export default Count1
