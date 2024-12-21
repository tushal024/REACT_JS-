



function Show({arr,del,edit}){

    return (
        <>
            {
                arr.map((e)=>{
                    return (
                        <>
                        <h1>  {e.img} </h1>
                        <h1>  {e.title} </h1>
                        <h1>  {e.price} </h1>
                        <button   onClick={()=> del(e.id) }  >  DELETE </button>
                        <button   onClick={()=> edit(e.id) }  >  EDIT </button>
                        <p>....................................................</p>
                        </>
                    )
                })
            }    
        </>
    )
}


export default Show