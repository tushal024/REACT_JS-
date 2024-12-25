import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Mapping_1 from '../Components/Mapping_1';

function Single_page() {

    let {id}=useParams()
    console.log(id);
    

    useEffect(()=>{



    },[])

  return (
    <div>
    <h1>  Single_page  </h1>

    <Mapping_1  id={id} />
    </div>
  )
}

export default Single_page
