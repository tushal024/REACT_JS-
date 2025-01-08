import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter2 from './Counter2';
import Counter3 from './Counter3';

function Counter1() {


    let C1 = useSelector(st => st.tt1)
    console.log(C1);
    

    let dis = useDispatch()

   return (
        <div className='flex justify-evenly mt-[10%] '>
            <div className='border w-[350px] h-[200px]'>
            <h1 className='text-[24px] text-[black]  font-[800]'>  Counter-1 </h1>

            <h1  className='text-[30px] mt-[20px]  mb-[20px]'>  {C1} </h1>
            <button className='w-[40px]  h-[30px] font-[800] rounded-[7px] hover:border-[blue]  pointer ' onClick={() => dis( {type:"INC" })} > +5 </button>
            {/* <button className='w-[40px]  h-[30px] font-[800] rounded-[7px] hover:border-[blue]  pointer ' onClick={() => dis( {type:"DES" })}   disabled={C1<=0 } > - </button> */}
            {/* <p></p> */}
            </div>

            <div  className='border w-[350px] h-[200px]' >


            <h1 className='text-[24px] text-[black]  font-[800]' >  counter-2 </h1>

            <Counter2/>
            </div>


            <div   className='border w-[350px] h-[200px]' >

            {/* ................................................................................................................................ */}
            <h1 className='text-[24px] text-[black]  font-[800]' >  counter-3 </h1>

                    <Counter3/>
                    </div>


        </div>
    )
}

export default Counter1
