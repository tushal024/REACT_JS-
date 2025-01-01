import React, { useEffect, useState } from 'react'

function Show({ob,setob}) {
    
    const[AA,setAA]=useState([])

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

    function ed(id){

      AA.filter((e)=>{
        if(e.id== id){
          setob({...ob,...e})
        }
        
      })

    }

    

  return (
    <div>
      {AA.map((e)=>{
        return (
            <div key={e.id}>
                 <h5> {e.img} </h5>
                            <h5> {e.title} </h5>
                            <h3> {e.price} </h3>
                            <button onClick={()=>del(e.id)} >DELETE</button>
                            <button onClick={()=>ed(e.id)} >  EDIT</button>

                            {/* <button  onClick={ts()}> EDIT OKK </button> */}



            </div>
        )
      })}

    </div>
  )
}

export default Show
