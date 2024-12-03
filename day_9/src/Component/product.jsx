
import { useEffect,useState } from "react"
import Productlist from "./Product_items";




function Products(){

    let [arr,setarr]=  useState([])


        useEffect(()=>{

            fetch(`https://fakestoreapi.com/products`)
            .then((r)=>{
                return r.json();
            })
            .then((res)=>{
                console.log(res);
                setarr(res)
                
            })
            .catch((er)=>{
                console.log(er);
                
            })
        },[])
        return(
            <>
            < Productlist  data={arr} />
            </>
        )
}
export default Products