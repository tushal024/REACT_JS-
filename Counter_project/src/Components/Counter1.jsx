import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter2 from './Counter2';
import Counter3 from './Counter3';

function Counter1() {


    let C1 = useSelector(st => st.tt1)
    console.log(C1);
    

    let dis = useDispatch()

   return (
        <div>

            <h1>  {C1} </h1>
            <button onClick={() => dis( {type:"INC" })} > + </button>
            <button onClick={() => dis( {type:"DES" })}   disabled={C1<=0 } > - </button>


            <h1>  counter-2 </h1>

            <Counter2/>

            {/* ........................................................ */}
            
                    <Counter3/>


        </div>
    )
}

export default Counter1
