import React from 'react'

function Mapping({ss}) {

    console.log(ss);
    

  return (
    <div>
            {
                ss.map((e)=>{
                    return (
                        <div>
                            <h5> {e.img} </h5>
                            <h5> {e.title} </h5>
                            <h3> {e.price} </h3>

                        </div>
                    )
                })
            }
    </div>
  )
}

export default Mapping
