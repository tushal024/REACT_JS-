

function Show({pass}){


    return (
        <>
                {
                    pass.map((t)=>{
                        return (
                            <>
                            <h1>  name: {t.name} </h1>
                            <h1>  number:{t.num}  </h1>
                            <h2>  hobby:{t.hobby}  </h2>
                            </>
                        )
                    })
                }    

        </>
    )
}



export default Show