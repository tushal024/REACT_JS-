import React, { useEffect, useState } from 'react'

function Login() {

    let [oo, setoo] = useState({
        email: "",
        pass: ""
    })

    let [tt, settt] = useState([])


    function change(e) {
        let [name, value] = e.target

        setoo({ ...oo, [name]: value })

    }

    useEffect(() => {
        fetch(`http://localhost:3000/data?email=${oo.email}`)

            .then((r) => r.json())
            .then((res) => {
                console.log(res);
                settt(res)
                // console.log(arr);


            })
            .catch((er) => {
                console.log(er);

            })

    }, [])


    function sub1(e) {
        e.preventDefault()
        console.log(tt);



        let ss = tt.filter((e) => {
            if (e.email == oo.email) {
                console.log("OKKKKKKK");
                return e

            }
        })

        console.log(ss);


    }


    return (
        <div>
            <h1>  Login </h1>

            <form action="" onSubmit={sub1}>



                <input type="text" onChange={change} placeholder='Email...' name="email" id="" />  <br />
                <input type="text" onChange={change} placeholder='Password...' name="pass" id="" />  <br />
                <input type="submit" name="" id="" />

            </form>

        </div>
    )
}

export default Login
