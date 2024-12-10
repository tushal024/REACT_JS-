


function Show(s){

    console.log(s.pass);
    

    return(
        <>

        {
            s.pass.map((t)=>{
                return (
                    <>
                        <h1> {t.email} , {t.pass},
                             {t.name} </h1>
                    </>
                )
            })
        }
        </>
    )
}



export default Show