import Ele from "./element"



function Productlist(List){

  return (
    <div>
  
      <div className="flex   flex-wrap  justify-center  " >   {

      List.data.map((e)=>{
        return (
          <>
            <Ele  image={e}  price={e.price}  />
          {/* <div className="border   h-[350px] border-[gray] ms-[5px] mb-[10px]  rounded-[10px]">
            <img src={e.image} alt="" width="200px"  className="h-[90%]   rounded-[10px]  p-[2px] " />
            <p className="mt-[10px]  mb-[10px]  ms-[10px] "> Price: ${e.price} </p>
            </div> */}
            </>
        )
      })  

       }
      
     </div>
  

    </div>
  )

}



export  default Productlist 
