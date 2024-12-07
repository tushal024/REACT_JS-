

function Show(p){

    
    {console.log(p.p_value)}
    
    return( <div>

                <div id="tss"   className="flex justify-between items-center">
                {p.p_value.map((e,index)=>{
                    return (
                        <div>
                            <h1   className="text-[20px] font-[600]  underline">{index}</h1>
                            <p className="mt-[10px] ">Username: {e.f_name} {e.l_name} </p>
                            <p>Email Id:  {e.email} </p>
                            <p>Phone No. :{e.p_num}   </p>
                            <p>Password : {e.pass}  </p>
                            <br />
                        </div>
                    )
                })}
                </div>
    </div> ) 
}

export default Show