import React, { useState } from 'react'

const Signup = () => {
    let[obj,setobj]=useState({
        email:"",
        pass:""
    })
    let[arr,setarr]=useState([])

    function change(e){
        let{name,value}=e.target
        setobj({...obj,[name]:value})

    }

    function sub(e){
        e.preventDefault();

        fetch(`http://localhost:3000/data`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(obj)
        })

        .then((r)=>r.json())
        .then((res)=>{
            console.log(res);
            // setarr([...arr,res])
            // console.log(arr);
            
            
        })
        .catch((er)=>{
            console.log(er);
            
        })

    }




  return (
    <div>
      <h1> Signup </h1>

      <form action=""  onSubmit={sub}>    


<input type="text"    placeholder='Username...'  name="" id="" />  <br />
<input type="text"   onChange={change} placeholder='Email...'  name="email" id="" />  <br />
<input type="text"   onChange={change} placeholder='Password...'  name="pass" id="" />  <br />
<input type="submit" name="" id="" />

      </form>
    </div>
  )
}

export default Signup
