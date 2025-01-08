import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter2() {

    let C2= useSelector(st=>st.tt2)
    let dis= useDispatch()



  return (
    <div>
          <h1>  {C2} </h1>
            <button onClick={() => dis( {type:"SQ" })}  > SQUER </button>
            <button onClick={() => dis( {type:"SQ1" })}     disabled={C2<=2 }  >  REVERSE SQUER </button>

    </div>
  )
}

export default Counter2
