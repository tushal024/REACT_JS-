import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Count1 from './Count1';

function Count() {

    // const ans= useSelector((TSa)=>{
    //   console.log(TSa.CC);
    //   return TSa.CC1
    //   })


      const anst= useSelector(Store=>Store.CC1)
    const ans1= useDispatch()
    console.log(anst);
    // console.log(useDispatch());
    


    function  Upp(){
        ans1({type:"INC1"})
    }
    

    function  Doww(){
        ans1({type:"DES1"})
    }
    

  return (
    <div className='w-[500px] border shadow-lg mt-[10%]  flex flex-col justify-center border-[lightgray] rounded-[20px] items-center gap-[20px]  m-[auto] pb-[20px]' >
      <h1 className='text-[30px] underline decoration-wavy  underline-offset-8  '> * Counter-1 * </h1>
      <div className='border w-[200px] flex rounded-[10px]  justify-center  items-center  p-[10px]'>
        <button  onClick={Upp} className='border  w-[40px] rounded-[7px] me-[5px] font-[800]  ' > +  </button>
        <h1 className='w-[60px] text-[30px] rounded-[7px] border h-[]' > {anst}  </h1>
        <button onClick={Doww}  className='border w-[40px] rounded-[7px] ms-[5px] font-[800] '  >  - </button>

        </div>
        <h1 className='text-[30px] underline decoration-wavy  underline-offset-8 '> * Counter-2 * </h1>

    <Count1/>

    </div>

  )
}

export default Count
