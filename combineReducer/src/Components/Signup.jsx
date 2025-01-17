import axios from 'axios';
import React, { useState } from 'react'

function Signup() {


    let [u_test, setu_test] = useState(false)
    let [e_test, sete_test] = useState(false)
    let [p_test, setp_test] = useState(false)



    const userRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
    const emailRegex = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/
    const passRegex = /^(?=.?[0-9])(?=.?[A-Za-z]).{8,32}$/



    let [obj, setobj] = useState({
        username: "",
        email: "",
        pass: ""

    })

    function change(e) {
        let { name, value } = e.target
        setobj({ ...obj, [name]: value })
        console.log(obj);

    }

    function sub(e) {
        e.preventDefault();
        axios.post(`http://localhost:3000/user`, obj)
            .then((res) => console.log(res.data)
            )
    }


    function bll() {
        if (obj.username.length > 0) {

            setu_test(false)

        }

        else {


            setu_test(true)
        }


    }

    function bll1() {
        if (obj.email.length > 0) {

            sete_test(false)

        }

        else {


            sete_test(true)
        }


    }


    function bll2() {
        if (obj.pass.length > 0) {

            setp_test(false)

        }

        else {


            setp_test(true)
        }

    }



    function foo() {
        setu_test(false)
    }

    return (
        <div>
            <h1> SIGNUP </h1>

            <form action="" onSubmit={sub}>
                <input onFocus={foo} onBlur={bll} type="text" name='username' onChange={change} /> <br />
                {u_test ? <p>  Enter Username...! </p> : ""}
               <input type="text"  onBlur={bll1}     name='email' onChange={change} /> <br />
               {e_test ? <p>  Enter Username...! </p> : ""}
                <input type="text"  onBlur={bll2}  name='pass' onChange={change} /> <br />
                {p_test ? <p>  Enter Username...! </p> : ""}

                <input type="submit" />

            </form>
        </div>
    )
}

export default Signup
