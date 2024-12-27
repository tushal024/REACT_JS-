import React, { useState } from 'react'
import { Link } from 'react-router-dom'

    
const Mapp=(ARR)=>{
    return (
        <div>
        {ARR.map((e)=>{
            return (
                <div key={e.id}>
                    <Link  to={`/Single_page/${e.id}`}>
                    <h5> {e.id} </h5>
                    {e.title}
                    </Link>
                </div>
            )
        })}
        </div>
    )

}


function Mapping({arr}) {
    return Mapp(arr)
    
}






export default Mapping
