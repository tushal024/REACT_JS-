import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Act } from '../Redux/Action';

function Login() {


    let [obj, setobj] = useState({
        username: "",
        email: "",
        pass: ""

    })
    
  let   navv= useNavigate()

    let diss= useDispatch()
    let el= useSelector(st=>st.Red)

    function change(e) {
        let { name, value } = e.target
        setobj({ ...obj, [name]: value })
        console.log(obj);

    }

    function sub(e){
        e.preventDefault()

        // Act(diss,obj.email);
        diss(Act)(obj.email)

    }
    console.log(el)
    

    return (
        <div>
            <h1> LOGIN </h1>

            <form action="" onSubmit={sub}>
                <input type="text" name='username' onChange={change} /> <br />
                <input type="text" name='email' onChange={change} /> <br />
                <input type="text" name='pass' onChange={change} /> <br />
                <input type="submit" />
            </form>


        </div>
    )
}

export default Login
