




    function Hoc(Ok){

        return  function({...props}) {

            if(props.ts){
                return <h1> loaing....</h1>
            }
            return <Ok {...props} />
        }
          
    
        
        



    }




  const Show=({pass})=>{
    return (
        <>
                        {
                            pass.map((t)=>{
    
                                return (
                                    <>
                                    <img src={t.img}  />
                                    <h5> {t.title} </h5>
                                    <h5>  {t.price} </h5>
                                    </>
                                )
                            })
                        }    
            </>
        )



   
  }  



  export let T =  Hoc(Show)

export default Show