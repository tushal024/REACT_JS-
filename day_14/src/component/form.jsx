import { useState } from "react";


 function Form(){

    let [obj,setobj]= useState({

        name:"",
        cource:"",
        tech:[""]

    })

    let [arr,setarr]=useState([])
    

     function handel(t){
        console.log(t.target);
        let {name,value}= t.target
        setobj( {...obj,[name]:value}  )
        // return (
        // )
     }
     function sub(t){
        t.preventDefault()
        // console.log(obj);

        setarr([...arr,obj])
        console.log(arr);
     }

     function add(e){
        let {name}= e.target


       setobj({...obj,tech:[...obj.tech,""]})
     }

     
    return(
        
        <>
        <form action="" onSubmit={sub} >


            <input type="text"  name="name"  onChange={handel}  placeholder="Name...."/> <br /><br />
            <input type="text"  name="cource" onChange={handel}  placeholder="Cource..."/> <br /><br />
            
            <input type="button" value={ "+" }  onClick={add} name="" id="" /> 
           
            {obj.tech.map((t)=>{
                
                return (
                    <>
                      <input type="text"  name="tech" onChange={handel}  placeholder="Technology..."/> <br /> <br />
                    </>
                )
            })}
         
            <input type="text"  name="hobby" onChange={handel}  placeholder="Hobby"/> <br /><br />

            <input type="Submit" name="" id="" />
        </form>
        </>
    )
 }


 export default Form