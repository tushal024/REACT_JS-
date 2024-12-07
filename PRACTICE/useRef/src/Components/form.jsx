import { useRef, useState } from "react"
import Show from "./show"


function Form(){

    let i1= useRef(null)
    let i2=useRef(null)
    let i3=useRef(null)

    let [arr,setarr]=useState([])




    
    
    let store=(e)=>{
        e.preventDefault()
       
        let obj={
            title:i1.current.value,
            url:i2.current.value,
            price:i3.current.value
    
    
        }
   

        setarr([...arr,obj])
        console.log(arr);
        
     
        
        
    }

    


    return(<>

        <form action="" onSubmit={store}>
            <input type="text"  ref={i1} /> <br /> <br />
            <input type="text"  ref={i2} /> <br /> <br />
            <input type="text"  ref={i3} /> <br /> <br />
            <input type="submit" name="" id="" />
        </form>
    
         <Show  pass={arr} />

    </>)
}


export default Form