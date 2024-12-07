import React, { useState } from 'react'
import View from './view'

function Login() {
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass:''
    })
    var [arr,serArr] = useState([])
    var [userErr, setUserErr] = useState(false)
    var [emailErr,setEmailErr]=useState(false)
    var [passErr, setPassErr] = useState(false)

    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/


    function getData(h) {
        var { name, value } = h.target
        
        setObj({ ...obj, [name]: value })
        
    }

    function javTyare(h) {
        var { name, value } = h.target
        if (name == "user" && value.length < 5) {
            setUserErr(true)
        }
        
        if (name == "email" && !emailregex.test(value) ) {
            setEmailErr(true)
        }

        if (name == "pass" && value.length < 8 &&  !passregex.test(value) ) {
            setPassErr(true)
        }
    }

    function aavoTyare(h) {
        var { name, value } = h.target

        if (name == "user") {
            console.log(value);
            setUserErr(false)
        }

        if (name == "email") {
            setEmailErr(false)
        }
        if (name == "pass") {
            setPassErr(false)
        }

    }

    function gayoData(j) {
        j.preventDefault()

        if(userErr == false && emailErr == false && passErr == false){
            serArr([...arr,obj])
            alert("Done ✅")
        }
        else{
            alert("Fill The Data ❌")
        }
    }

  return (
    <>    <div className='main'>
        <form action="" onSubmit={gayoData}>
              <h1 className='h1'>Login</h1>
              <input type="text" name='user' style={userErr == true ? {  borderColor: "red" }: { borderColor: "black" }} placeholder='Enter Your User Name' onChange={getData} onBlur={javTyare} onFocus={aavoTyare}/>
              {userErr == true ?<p className='p1'>Wrong User Name</p> : ""}
              
              <input type="text" name='email' style={emailErr == true ? {  borderColor: "red" }: { borderColor: "black" }} placeholder='Enter Your Email' onChange={getData} onBlur={javTyare} onFocus={aavoTyare}/>
              {emailErr == true ?<p className='p1'>Valid Email Id</p> : ""}


              <input type="text" name='pass' style={passErr == true ? {  borderColor: "red" }: { borderColor: "black" }} placeholder='Enter Your Password' onChange={getData} onBlur={javTyare} onFocus={aavoTyare}/>
              {passErr == true ?<p className='p1'>Enter Strong Password</p> : ""}

              <input type="submit"/>
        </form>
    </div>

    <View data = {arr}/>
    </>

  )
}

export default Login