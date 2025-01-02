import React, { useState } from 'react'

const Form = () => {
    let[obj,setobj]=useState({
        email:"",
        pass:""
    })
    let[arr,setarr]=useState([])
    let[od,setod]=useState("")

    function sub(e){
        e.preventDefault()

        fetch(`http://localhost:3000/data`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })


    


        fetch(`http://localhost:3000/data`)
        .then((req)=>{
            return req.json();
        })
        .then((res)=>{
            console.log(res);

            setarr(res)
            
        })
        .catch((er)=>{
            console.log(er);
            
        })




      
    }

    function change(e){
        let{name,value}= e.target
        setobj({...obj,[name]:value})    
        }

        function ed(idd){
            setod(idd)
            console.log(idd);

            arr.filter((e)=>{
                if(e.id==idd){
                    setobj({...obj,...e})
                }
            })
            
        }

        function ts_e(){
          let ss=  arr.map((e)=>{
                if(od==e.id){
                    console.log(e);
                    console.log({...e});

                    
                    return ({...e,...obj})
                }
                else{
                    return e
                }
            })

            
            setarr(ss)
            console.log(ss);
        }

  return (
    <div>
        <form action="" onSubmit={sub}>

        <input type="text"  onChange={change} value={obj.email} name="email" id="" /><br />
        <input type="text"  onChange={change} value={obj.pass} name="pass" id="" /><br />
        <input type="button"  onClick={ts_e} value={"EDIT_DATA"} name="" id="" /> <br />
        <input type="submit" name="" id="" />

        </form>
        {
            arr.map((e)=>{
                return (
                    <div key={e.id}>
                        <h4>  {e.email} </h4>
                        <h4> {e.pass} </h4>
                        <button onClick={()=>ed(e.id)}> EDIT </button>
                    </div>
                )
            })
        }



    </div>
  )
}

export default Form
