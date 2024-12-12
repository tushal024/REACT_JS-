import { useState } from "react"
import Show from "./show"


function From(){

    let[data,setdata]=useState({
        name:"",
        num:"",
        hobby:[""]

    })

    let[arr,setarr]=useState([])

    let change = (t)=>{

        let {name,value}= t.target

        setdata({...data,[name]:value})

    }



    let sub=(t)=>{
        t.preventDefault();

        setarr([...arr,data])

        console.log(arr);
        
    }
    

    function add(){
        
        setdata({...data,hobby:[...data.hobby,""]})
    }

    return (
        <>


        <form action="" onSubmit={sub}>



            <input  name="name" type="text" onChange={change} /> <br />
            <input  name="num" type="text" onChange={change} /> <br />

        <input type="button" onClick={add} value={ "add"} name="" id="" />
            { data.hobby.map((t)=>{
                    return (
                         <>
                          <input  name="hobby" type="text" onChange={change} /> <br />
                        </>
                    )

            }) }
            
           
            <input type="submit" />

        </form>

        <Show  pass={arr} />
        </>
    )        

}




export default From