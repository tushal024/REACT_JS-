import React, { useState ,useEffect} from 'react'

function Mapping_1({id}) {

    const[arr1,setarr1]=useState([])

     useEffect((e)=>{
    
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((req)=>{
                return req.json()
            })
            .then((res)=>{
                // console.log(res);
                setarr1(res)
                
                
            })
            .catch((err)=>{
                console.log(err);
                
            })
            
    
        },[])

 
 
    return (
    <div>
      { 
       
                <div>
                    {arr1.email}
                </div>
           
      }
    </div>
  )
}

export default Mapping_1
