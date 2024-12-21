function Show({arr,dell,edit}){


    return(
        <>

        {
            arr.map((e)=>{
                return (
                    <>
                    <h1> {e.img} </h1>
                    <h1> {e.title} </h1>
                    <button    onClick={()=>dell (e.id) } > DELETE </button>
                    <button    onClick={()=>edit (e.id) } > EDIT </button>
                    </>
                )
            })
        }
        </>
    )
}


export default Show