import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter2() {

    let C2= useSelector(st=>st.tt2)
    let dis= useDispatch()

    let dd= 2


  return (
    <div>
          <h1  className='text-[30px] mt-[20px]  mb-[20px]' >  {C2} </h1>
            <button  className='w-[150px]  h-[30px] font-[500] rounded-[7px] hover:border-[blue]  pointer '   onClick={() => dis( {type:"SQ",payload:{ ts: dd * dd } })}  > SQUER </button>
            {/* <button  className='w-[150px]  h-[30px] font-[500] rounded-[7px] hover:border-[blue]  pointer '   onClick={() => dis( {type:"SQ1" })}     disabled={C2<=2 }  >  REVERSE SQUER </button> */}

    </div>
  )
}

export default Counter2
