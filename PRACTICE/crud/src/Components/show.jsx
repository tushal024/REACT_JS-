

function Show({ pass, delete_1, Edit, d_arr,tr }) {




    // function Arr(s){
    //     s.map((e) => {
    //         return (
    //             <div key={e.id}>
    //                 <div className="ss">
    //                     <img src={e.img} alt="" width={"200px"} height={"300px"} />
    //                     <h4> {e.name1} </h4>
    //                     <h4> {e.price} </h4>
    //                     <h4> {e.des} </h4>

    //                     <button onClick={() => { delete_1(e.id) }} >DELETE</button>
    //                     <button onClick={() => { Edit(e.id) }} >EDIT</button>

    //                 </div>
    //             </div>
    //         )

    //     })
        

    // }

    return (
        <div className="main" >
            {/* { tr == false ? Arr(pass) :Arr(pass)  } */}



            { tr== false ?  
                pass.map((e) => {
                    return (
                        <div key={e.id}>
                            <div className="ss">
                                <img src={e.img} alt="" width={"200px"} height={"300px"} />
                                <h4> {e.name1} </h4>
                                <h4> {e.price} </h4>
                                <h4> {e.des} </h4>
        
                                <button onClick={() => { delete_1(e.id) }} >DELETE</button>
                                <button onClick={() => { Edit(e.id) }} >EDIT</button>
        
                            </div>
                        </div>
                    )
        
                })
                :
                d_arr.map((e) => {
                    return (
                        <div key={e.id}>
                            <div className="ss">
                                <img src={e.img} alt="" width={"200px"} height={"300px"} />
                                <h4> {e.name1} </h4>
                                <h4> {e.price} </h4>
                                <h4> {e.des} </h4>
        
                                <button onClick={() => { delete_1(e.id) }} >DELETE</button>
                                <button onClick={() => { Edit(e.id) }} >EDIT</button>
        
                            </div>
                        </div>


)
        
                })


                
                
            }


          
        </div>


    )
}


export default Show