import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [obj,setobj]=useState({
        name:"",
        email:"",
        pass:""

    })
    let nn= useNavigate();

    function change(e){
        let {name,value} = e.target

        setobj({...obj,[name]:value})

    }
    console.log(obj);
    
    function sub(e){

        e.preventDefault()

        fetch(`http://localhost:3000/user`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },

            body:JSON.stringify(obj)

        })

        .then((r)=>{
            return r.json();
        })
        .then((res)=>{
            console.log(res);
            nn("/login")

        })
        .catch((er)=>{
            console.log(er);

            
        })

    }

  return (
    <div>
      <h1>Signup</h1>

      <form action="" onSubmit={sub}>

        <input type="text" name='name'  placeholder='Enter Your Username...' onChange={change} /> <br /> <br />
        <input type="text" name='email'   placeholder='Enter Your Email...'  onChange={change}  /> <br /> <br />
        <input type="text" name='pass'    placeholder='Enter Your Password...'  onChange={change} /> <br /> <br />
        <input type="submit" />

      </form>
    </div>
  )
}

export default Signup
