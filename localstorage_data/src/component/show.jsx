
function Show({pass}){

    return (
        <div className="main" >

        {pass.map((e)=>{
            return (
                <div className="ss">
                    <img src={e.img} alt="" width={"200px"}  height={"300px"} />
                    <h4> {e.name1} </h4>
                    <h4> {e.price} </h4>
                    <h4> {e.des} </h4>
                </div>
            )

        })}

             </div>      
    
    )
}


export default Show