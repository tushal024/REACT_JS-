
function Show(p){

    console.log(p);
    
    

    return(
        <>
        <div>
        {p.arr.map((e)=>{
            return <div>
                <img src={e.img} alt="" />
                <h1>{e.title}</h1>
                <h4>{e.price}</h4>
            </div>
        })}
        </div>
        
        </>
    )
}




export default Show