import React, { useState, useEffect } from 'react'

function Mapping_1({ id }) {

    const [arr1, setarr1] = useState(JSON.parse(localStorage.getItem("data")) || [])

    let [jarr, setjarr] = useState(JSON.parse(localStorage.getItem("data")) || [])

    const[check,setcheck]=useState(false)

    useEffect((e) => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((req) => {
                return req.json()
            })
            .then((res) => {
                console.log(res);
                setarr1(res)





            })
            .catch((err) => {
                console.log(err);

            })


    }, [])

    function add(idd) {

        console.log(idd);
        setjarr([...jarr, arr1])
                console.log("ok");

               let st= jarr.map((e)=>{

                    if(e.id== idd){
                        return setcheck(true)
                        
                    }
                    else{
                        console.log("yess");
                        
                    }

                   
                })
                
                console.log(st);
                

                if(check== false){
                    // console.log("unnati...");
                    localStorage.setItem("data", JSON.stringify(jarr))

                    
                }
                else{
                    alert("data added....")
                }

              
        // setjarr([...jarr,arr1])

    }
    console.log(jarr);
    return (
        <div>
            {

                <div>
                    {arr1.email}
                    <button onClick={() => add(arr1.id)} > Add To Cart </button>

                </div>

            }
        </div>
    )
}

export default Mapping_1
