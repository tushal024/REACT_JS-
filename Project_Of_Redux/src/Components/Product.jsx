
import React, { useEffect, useState } from 'react'
import { Fetchdata } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {

    const[state,setstate]= useState([])

    let data1= useSelector(store=>store )
    let diss= useDispatch()
    // console.log(diss);
    


    // console.log(diss)
    console.log(data1)

    

        useEffect(()=>{

                diss(Fetchdata)
                    // Fetchdata(diss)

        },[])

        console.log(state)
        

  return (
    <div className='flex justify-center items-center flex-wrap '>

        { data1.loading ? <div>   <img src="https://cdn.dribbble.com/users/34535/screenshots/631316/loader_gif.gif" alt="" /> <p  className='mt-[-70px] text-[20px] ' > Loading...... </p>  </div>
         : 
        
        
            data1.data.map((e)=>{
                return (
                    <div id="card"key={e.id} className='w-[19%] h-[350px] shadow-inner  cursor-pointer shadow-[black]-500/50 hover:shadow-xl mt-[10px] border rounded-[10px] ms-[10px] p-[px] ' >
                        
                    <div id="img" className='flex  h-[60%]     justify-center items-center'>

                        <img src={e.thumbnail} alt=""  width={"200px"} />
        
                    </div>
                    <div id="title"  className='flex justify-start items-start  flex-col ps-[10px] ' >
                        <h3   className='text-[15px] font-[600]   '  >  {e.title} </h3>
                        <p className='text-[gray]  text-[12px] ' > {e.brand} </p>
                        {/* <p>   {e.description} </p>                          */}
                            <h1 className='text-[16px]  font-[500] ps-[0px] mt-[5px] '> $ {e.price } 
                                 <span className='text-[gray] font-[100] line-through ms-[10px]  ' > $ {e.price+130} </span>  
                             <span className='text-[15px] ms-[7px] font-[400] text-[green] ' >  {e.discountPercentage} % Off </span>   </h1>
                            {/* <span>  {e.discountPercentage} % Off </span> */}

                            <p  className='mt-[5px]' >
                            <i class="fa-solid fa-star  text-[gold] "></i>
                            <i class="fa-solid fa-star  text-[gold] "></i>
                            <i class="fa-solid fa-star  text-[gold] "></i>
                            {/* <i class="fa-solid fa-star  text-[gold] "></i> */}
                            <i class="fa-solid fa-star-half-stroke  text-[gold]  "></i>
                            {/* <i class="fa-solid fa-star  text-[gold] "></i> */}
                                  {e.rating}*     </p>

                            <p className='text-[14px] text-[green] mt-[5px] ' >  Save extra with combo offers </p>
                          
                    </div>
                </div>
                    )
                })
        }

       


       
      
    </div>
  )
}

export default Product
