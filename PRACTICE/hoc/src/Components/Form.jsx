import { useState } from "react"
import Show, { T } from "./show"



function Form(){
    

    const[arr,setarr]=useState([])
    const[test,settest]=useState(true)


     const[obj,setobj]= useState({
        img:"",
        title:"",
        price:0
     })
    const change=(ele)=>{

        const{name,value}= ele.target
        setobj({...obj,[name]:value})


    }

    const sub=(t)=>{

        t.preventDefault()


        setInterval(()=>{

            setarr([...arr,obj])

            settest(false)

        },1000)

    console.log(arr);
    

    }
    


    return(
        <>
                <form action="" onSubmit={sub} >

                    <input   name="img"  onChange={change}   type="text" /> <br /><br />
                    <input   name="title"  onChange={change}   type="text" /> <br /><br />
                    <input   name="price"  onChange={change}   type="text" /> <br /><br />
                    <input type="submit" />
                </form>


                {/* <Show   /> */}

                <T pass={arr}  ts= {test} />
        </>
    )
}



export default Form