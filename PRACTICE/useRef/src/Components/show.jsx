

function Show(t){

    {console.log(t.pass)}
    
    return(
        <>
        {t.pass.map((e)=>{

            return (
                <>
                    <h1> {e.title} </h1>
                    <img src={e.url} alt="" />
                    <h2>{  e.price }</h2>
                </>
            )
        })}
        </>
    )
}

export default Show