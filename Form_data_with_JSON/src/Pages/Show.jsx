import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Show({ob,setob}) {
    
    const[AA,setAA]=useState([])

      let tt= useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((r)=>{
            return r.json();
        })
        .then((res)=>{
            // console.log(res)
            // setss([...ss,res])
            setAA(res)
         

        })
        .catch((er)=>{
            console.log(er);

            
        })

    },[AA])



    

    // console.log(AA);


    function del(id){
      fetch(`http://localhost:3000/data/${id}`,{
        method:"DELETE",
      
        
      })
     

    }

    let tss = useNavigate();



    function ed(id){     

    }

    

  return (
    <div  className='flex  justify-evenly  mt-[40px]'>
      {AA.map((e)=>{
        return (
            <div key={e.id} className='w-[300px]  rounded-[10px]  '>

                 <img src={e.img} alt="Not FOund.."  className='w-[60%] ms-[15%] h-[250px] rounded-[10px]  shadow-2xl' />
                            <h5 className='text-center mt-[10px]' > {e.title} </h5>
                            <h3 className='text-center' >$ {e.price}/- </h3>
                            <button onClick={()=>del(e.id)}  className='w-[50%] border  rounded-[7px] bg-[red]  text-[white] ms-[25%] h-[35px]   block'   >     DELETE </button>
                            <Link to={`/WW/${e.id}`}>   <button onClick={()=>ed(e.id)}   className='w-[50%] border  rounded-[7px] bg-[black]  text-[white] ms-[25%] h-[35px] block '  >  EDIT     </button>  </Link> 

                            {/* <button  onClick={ts()}> EDIT OKK </button> */}


            </div>
        )
      })}

    </div>
  )
}

export default Show
