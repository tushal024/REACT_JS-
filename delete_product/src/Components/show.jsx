

function Show({pass,delete_1,edit}){

    return (
        <div className="main" >

        {pass.map((e)=>{
            return (
                <div key={e.id}>
                <div  className="ss">
                    <img src={e.img} alt="" width={"200px"}  height={"300px"} />
                    <h4> {e.name1} </h4>
                    <h4> {e.price} </h4>
                    <h4> {e.des} </h4>

                    <button  onClick={()=>{delete_1(e.id)}} >DELETE</button>
                    <button   onClick={()=>{edit(e.id)}} >EDIT</button>
                    
                </div>
                </div>
            )

        })}

             </div>      
             
    
    )
}


export default Show