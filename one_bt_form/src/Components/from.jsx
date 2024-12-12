import { useEffect, useState } from "react"
import Show from "./show"


function From(){

    let[data,setdata]=useState({
        name:"",
        num:"",
        hobby:[""]

    })

    let[arr,setarr]=useState([])
    let[n_e,setn_e]=useState(false)
    let[num_e,setnum_e]=useState(false)
    let[dis,setdis]=useState(true)

    let change = (t)=>{

        let {name,value,dataset}= t.target


        if(( name=="name"    && value.length>3)  || (  name=="num"    && value.length>3    )){
            setdis(false)
        }
        else{
            setdis(true)
        }

        if(name == "hobby"  ){
            console.log(dataset.index);
            
            let hob= [...data.hobby]
            hob[dataset.index]= value
            setdata({...data,[name]:hob})    
        }
        else{

            setdata({...data,[name]:value})
        }


       

    }



    let sub=(t)=>{
        t.preventDefault();

        
        if( n_e== false && num_e== false ){

            setarr([...arr,data])
            alert("Success...")
        }
        else{
            alert("plese Complate your form")
        }

       

        console.log(arr);
        
    }
    

    function add(){
        setdata({...data,hobby:[...data.hobby,""]})
     
        
    }

    let blar=(t)=>{

        let{name,value}=t.target

        if(name=="name" &&value.length<3 ){
            setn_e(true)

        }
        
        if(name=="num" &&value.length<3 ){
            setnum_e(true)

        }

      

        
    }

    let focus=(t)=>{
        let{name}=t.target

        if(name =="name" ){
            setn_e(false)
        }
        if(name == "num" ){
            setnum_e(false)
        }


    }

    


    return (
        <>


        <form action="" onSubmit={sub}>




            <input  name="name" onFocus={focus} onBlur={blar}  type="text" onChange={change} /> <br />
            { n_e== true ? <p> error   </p> : 
            
            ""
              
             }
            <input  name="num"      onBlur={blar}  onFocus={focus}   type="text" onChange={change} /> <br />
            { num_e== true ? <p> error   </p> : "" }

        <input type="button" onClick={add} value={ "add"} name="" id="" />
            { data.hobby.map((t)=>{
                    return (
                         <>
                          <input  name="hobby" type="text" onChange={change} /> <br />
                        </>
                    )

            }) }
            
           
            <input type="submit" disabled={dis} />

        </form>

        <Show  pass={arr} />
        </>
    )        

}




export default From