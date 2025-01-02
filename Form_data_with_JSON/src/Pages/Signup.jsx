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
    <div className=' w-[30%] pb-[50px] pt-[30px] rounded-[10px]  border-[darkgray] border  shadow-lg shadow-gray-500/50  m-[auto] mt-[50px]' >
      <h1 className='text-[30px] font-[600] text-center' >Signup</h1>

      <form action="" onSubmit={sub}  className=' mt-[10px] w-[100%] m-[auto]  border-[gray]' >

        <input type="text" name='name'   className='border  rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]' placeholder='Enter Your Username...' onChange={change} /> <br /> <br />
        <input type="text" name='email'  className='border  rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]'   placeholder='Enter Your Email...'  onChange={change}  /> <br /> <br />
        <input type="password" name='pass'   className='border  rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]'   placeholder='Enter Your Password...'  onChange={change} /> <br /> <br />
        <input type="submit" className='w-[50%] border  rounded-[7px] bg-[black]  text-[white] ms-[25%] h-[35px] ' />

      </form>
    </div>
  )
}

export default Signup
