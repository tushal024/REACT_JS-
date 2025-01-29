import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Get } from '../Redux/Action';

const List = () => {

    // let ss  =  useSelector(st=>st)


    

    // console.log(ss);

        useEffect(()=>{

            async function  S(){
                console.log(  await Get());
            }

        })

    


  return (
    <div>
      
    </div>
  )
}

export default List
