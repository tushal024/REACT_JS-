


function Show({pass}){

    console.log(pass);
    

    return (
        <>
          <div className="main1">
        {


              
            pass.map((t)=>{
                return (
                    <div>
                        <img src={t.img} alt="Not Find"  />
                    {/* <h1>  {t.img} </h1> */}
                       <h1>Product Name: {t.name} </h1> 
                       <h1>Product Price:  {t.price} </h1>
                       <h1> category : {t.category}</h1>
                    </div>      
                )
            })
        }</div>

        </>
    )
}



export default Show