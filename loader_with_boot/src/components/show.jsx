import Product from "./pr"

function Hoc(Sho){
    return function ({...props}){

        if(props.con){
            return <h1>  loading...... </h1>
        }
        return <Sho {...props} />
     
    }  
}
function Show({pass}){
    return(
        <> {pass.map((t)=>{
                return(
                    <>

                    <img src={t.image} alt="" width={"100px"} />
                    <p> {t.title } </p>
                    <p> {t.price} </p>

                    </>
                )
            })}
        </>
    )
}

 export let A = Hoc(Show)

export default Show