import { useEffect, useState } from "react"
import Show from "./show"




    function Form(){

        let [st,setst]=useState([])
        let[load,setload]=useState(true)

        

        useEffect(()=>{

            fetch(`https://fakestoreapi.com/products`)

            .then((re)=>{
                return re.json();
            })
            .then((res)=>{

            // console.log(res);
            setst(res)
            setload(false)
            
            
            
            })
            .catch((er)=>{

                console.log(er);
                
            })


          

        },[])
        console.log(st);
       

        return (
            <>
        {

                    load == true ? <p>loading....</p> :

            st.map((t)=>{
                return (
                    <>
                    <img src={t.image} alt=""  width={"100px"} />
                    <p> {t.category}  </p>
                    </>
                )
            })
        }
               
            </>
        )
    }


export  default  Form