import { useEffect, useState } from "react"
import Show, { A } from "./show";


function Product(){

    let[arr,setarr]=useState([])
    let[st,setst]=useState(true)

    useEffect(()=>{

        fetch(`https://fakestoreapi.com/products`)
        .then((r)=>{
            return r.json();
        })
        .then((res)=>{
            console.log(res);
            setarr(res)
            setst(false)
            
        })
        .catch((er)=>{
            console.log(er);
            
        })
    },[])

    return (
        <>
                    <A   pass={arr} con={st} />
        </>
    )


    
 

}




export default Product