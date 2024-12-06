
function Show(p){

    console.log(p);
    
    

    return(
        <>
        <div className="flex justify-center items-center">
        {p.arr.map((e)=>{
            return <div className="border border-[black] w-[300px] rounded-[10px]  ms-[10px]  overflow-hidden ">
                <img src={e.img} alt="" className="w-[250px] h-[300px]  m-[auto] "   />
                <h1 className="text-[20px]   ms-[5px] mt-[5px]">{e.title}</h1>
                <p className="ms-[5px]">  <i className="fa-solid fa-bag-shopping text-[#777B7F] "  ></i>  Free Delhivery  </p>
                <h4   className="ms-[5px] text-[18px] font-[600]  mb-[7px]">  Just ${e.price}     <span className="text-[green] ms-[10%]"> Off 33% </span> </h4>
                <p className="ms-[5px] mb-[10px]">Upto ₹300 Off on Exchange</p>
            </div>
        })}
        </div>
        </>
    )
}




export default Show