



function Show({data}){

    return(
        <div>
                    {  data.map((e)=>{
                        return <div>
                          name:  {e.name}
                          <br />
                          tech: {e.tech}
                        </div>
                    }) }
        </div>
    )
}



export default Show