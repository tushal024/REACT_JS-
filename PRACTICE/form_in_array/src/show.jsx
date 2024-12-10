


function Show({ data }) {
    console.log(data);

    return (<>   <div className="main">   {
                         data.map((el) => {

                            return <div className="inn">
          <h1>...Your Data...</h1>

                                    <h4>Name:  {el.name} </h4>
                                    <h4>Number: {el.number} </h4>
                                    <h4> Hobby: {el.hobby.join(",")   }  </h4>
        
            </div>
        })
    }
    
    </div>
    </>


    )

}



export default Show