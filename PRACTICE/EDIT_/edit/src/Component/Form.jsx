import React, { useEffect, useState } from 'react'
import Show from './Show'

const Form = () => {

    let [obj, setobj] = useState({
        email: "",
        pass: ""
    })
    let [ss, setss] = useState("")

    let [arr, setarr] = useState([])

    function change(e) {
        let { name, value } = e.target

        setobj({ ...obj, [name]: value })
    }

    function sub(e) {
        e.preventDefault();
        setarr([...arr, obj])
        console.log(arr);


        fetch(`http://localhost:3000/data`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((req) => {
                return req.json();
            })
            .then((res) => {
                console.log(res);

                // setarr([...arr,res])
            })
            .catch((er) => {
                console.log(er);

            })

    }

    useEffect(()=>{
        fetch(`http://localhost:3000/data`)
        .then((req) => {
            return req.json();
        })
        .then((res) => {
            // console.log(res)


            setarr(res)
            // console.log(arr);

        })
        .catch((er) => {
            console.log(er);

        })

    },[])

   





    function edd(idd) {
        setss(idd)

        let ssq = arr.map((e) => {
            if (idd == e.id) {
                return (
                    setobj({...obj,...e})
                )
            
            }

            else {
                return e
            }

        })

        // setobj(ss)



    }

    function abc(){
     let v=   arr.map((e)=>{
            if(e.id== ss){
                return(
                    {...e,...obj}
                )
            }
            else{
                return e
            }
        })


        setarr(v)

    }

    // function abc(){
    //     arr.map((e)=>{
    //         if(ss==e.id){
    //             return setobj({obj,...e})
    //         }
    //         else{
    //             return e
    //         }
    //     })
    // }

    return (
        <div>

            <form action="" onSubmit={sub}>
                <input onChange={change} value={obj.email} type="text" name="email" id="" />
                <input onChange={change} value={obj.pass} type="text" name="pass" id="" />
                 <input type="button" value={"EDIT"} onClick={abc} name="" id="" /> 
                <input type="submit" name="" id="" />

            </form>

            {arr.map((e) => {
                return (
                    <div key={e.id}>
                        <h5> {e.email} </h5>
                        <h5> {e.pass} </h5>
                        <button onClick={() => edd(e.id)}>  EDIT </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Form
