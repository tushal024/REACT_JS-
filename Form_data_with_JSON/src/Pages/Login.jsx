import React from 'react'
import { useState } from 'react'


function Login() {


    const [obj,setobj]=useState({
            name:"",
            email:"",
            pass:""
    
        })

    function sub1(e) {

        e.preventDefault()

        fetch(`http://localhost:3000/user?email=${obj.email}`)

            .then((r) => {
                return r.json();
            })
            .then((res) => {
               
                if(res.length>0){
                    // alert("Success..")

                    // if(res[0].pass)
                    // console.log();
                    if(res[0].pass == obj.pass){
                        alert("Login Success....🤩")
                        localStorage.setItem("Tushal",true)
                    }
                    else{
                        alert("Plese Enter Valid Password....🙄")
                        localStorage.setItem("Tushal",false)
                    }
                    
                }
                else{
                    alert("Plese Registor Your Email....📍")
                    localStorage.setItem("Tushal",false)
                }

            })
            .catch((er) => {
                console.log(er)

            })

    }


    function change(e){
        let {name,value} = e.target

        setobj({...obj,[name]:value})

    }
    
    return (
        <div className='  w-[30%] pb-[50px] pt-[30px] rounded-[10px]  border-[darkgray] border  shadow-lg shadow-gray-500/50  m-[auto] mt-[50px]'>
            <h1 className='text-[30px] font-[600] text-center'> LOGIN FORM</h1>
            <form action="" onSubmit={sub1}  className='  w-[100%] m-[auto]  border-[gray]' >
                <input type="text" name='email' onChange={change}  className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px] ' placeholder='Enter Your Email...' /> <br /> <br />
                <input type="password" name='pass' onChange={change}   className='border  rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px] ' placeholder='Enter Your Password...'/> <br /> <br />
                <input type="submit" className='w-[50%] border  rounded-[7px] bg-[black]  text-[white] ms-[25%] h-[35px] ' />
            </form>
        </div>
    )
}

export default Login

