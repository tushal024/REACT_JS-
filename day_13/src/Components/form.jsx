import React, { useEffect, useState } from 'react'
import Show from './show'

function Form() {

    const [f_n_e, setf_n_e] = useState(false)
    const [l_n_e, setl_n_e] = useState(false)
    const [e_e, sete_e] = useState(false)
    const [mob_e, setmob_e] = useState(false)
    const [pass_e, setpass_e] = useState(false)


    const [arr, setarr] = useState([])
    const [val, setvel] = useState({
        f_name: "",
        l_name: "",
        email: "",
        p_num: "",
        pass: ""
    })


   useEffect(()=>{

    document.getElementById("tt1").focus();

   },[])


    function data_i(e) {
        let { name, value } = e.target
        setvel({ ...val, [name]: value })
        // console.log(val)
    }

    function sub(e) {
        e.preventDefault()

        if (f_n_e == true || l_n_e == true || e_e == true || mob_e  == true || pass_e== true)   {
            alert("Plase Enter All Details....📍")
            }
    

        if(f_n_e == false && l_n_e == false && e_e == false && mob_e  == false && pass_e== false){
            setarr([...arr, val ])
           
            alert("Success...👍")

        }
        
      
        console.log(arr);
        
    }



    function bll(e) {

        let { name, value } = e.target
        if (name == "f_name" && value.length < 5) {

            setf_n_e(true)

        }

        if (name == "l_name" && value.length < 5) {

            setl_n_e(true)

        }
        if (name == "email" && value.length < 5) {

            sete_e(true)

        }
        if (name == "p_num" && value.length < 5) {

            setmob_e(true)

        }
        if (name == "pass" && value.length < 5) {

            setpass_e(true)

        }


    }



    function focc(e) {

        let { name, value } = e.target

        if(name == "f_name"){
            setf_n_e(false)
        }
        if (name == "l_name") {
            setl_n_e(false)
        }
        if(name=="email"){
            sete_e(false)
        }


        if(name=="p_num"){
            setmob_e(false)
        }

        if(name=="pass"){
            setpass_e(false)
        }




    }

    // if(f_n_e == true){
    //     document.getElementById("tt1").style.borderColor="red"
    //     document.getElementById("tt2").style.borderColor="black"
    //     document.getElementById("tt3").style.borderColor="black"
    //     document.getElementById("tt4").style.borderColor="black"
    //     document.getElementById("tt5").style.borderColor="black"
    // }

    // if(l_n_e==true){
    //     document.getElementById("tt2").style.borderColor="red"
    //     document.getElementById("tt1").style.borderColor="black"
    //     document.getElementById("tt3").style.borderColor="black"
    //     document.getElementById("tt4").style.borderColor="black"
    //     document.getElementById("tt5").style.borderColor="black"
    // }
    // if(e_e==true){
    //     document.getElementById("tt3").style.borderColor="red"

    //     document.getElementById("tt1").style.borderColor="black"
    //     document.getElementById("tt2").style.borderColor="black"
    //     // document.getElementById("tt3").style.borderColor="black"
    //     document.getElementById("tt4").style.borderColor="black"
    //     document.getElementById("tt5").style.borderColor="black"
        
    // }
   
    // if(mob_e==true){
    //     document.getElementById("tt4").style.borderColor="red"

    //     document.getElementById("tt1").style.borderColor="black"
    //     document.getElementById("tt2").style.borderColor="black"
    //     document.getElementById("tt3").style.borderColor="black"
    //     // document.getElementById("tt4").style.borderColor="black"
    //     document.getElementById("tt5").style.borderColor="black"
    // }
    // if(pass_e==true){
    //     document.getElementById("tt5").style.borderColor="red"

    //     document.getElementById("tt1").style.borderColor="black"
    //     document.getElementById("tt2").style.borderColor="black"
    //     document.getElementById("tt3").style.borderColor="black"
    //     document.getElementById("tt4").style.borderColor="black"
    //     // document.getElementById("tt5").style.borderColor="black"
    // }
    
    
    


    // console.log(arr);
    return (
        <>
        <div className=' w-[500px] border m-auto mt-[100px] ' >

            <form action="" id='ffo' className='' onSubmit={sub}>
                <h1 className='text-center   text-[30px]' >SignUp</h1>
                <input type="text"  onFocus={focc} onBlur={bll} name="f_name" onChange={data_i} className='border border-[black] w-[400px] h-[40px] ms-[50px]   ps-[20px]  rounded-[10px] mt-[16px] ' placeholder='First Name' id="tt1" /> <br />

                {f_n_e == true ?    <p > *Enter Valid Name... </p> : ""}

                <input type="text"   onFocus={focc}    onBlur={bll} name="l_name" onChange={data_i} className='border border-[black] w-[400px] h-[40px] ms-[50px]   ps-[20px]  rounded-[10px] mt-[16px] ' placeholder='Last Name' id="tt2" /> <br />

                {l_n_e == true ? <p> *Enter Valid Name... </p> : ""}

                <input type="email" onFocus={focc}    onBlur={bll} name="email" onChange={data_i} className='border border-[black] w-[400px] h-[40px] ms-[50px]   ps-[20px]  rounded-[10px] mt-[16px] ' placeholder='Email' id="tt3" /> <br />

                {e_e == true ? <p> *Enter Valid Email... </p> : ""}

                <input type="text" onFocus={focc}    onBlur={bll} name="p_num" onChange={data_i} className='border border-[black] w-[400px] h-[40px] ms-[50px]   ps-[20px]  rounded-[10px] mt-[16px] ' placeholder='Phone Number' id="tt4" /> <br />

                {mob_e == true ? <p> *Enter Valid Phone No ... </p> : ""}

                <input type="text"  onFocus={focc}   onBlur={bll} name="pass" onChange={data_i} className='border border-[black] w-[400px] h-[40px] ms-[50px]   ps-[20px]  rounded-[10px] mt-[16px] ' placeholder='Password' id="tt5" /> <br />

                {pass_e == true ? <p> *Enter Valid Password... </p> : ""}

                <input type="submit" className='border border-[black] h-[40px] w-[300px] rounded-[10px] ms-[100px] mt-[20px] bg-[skyblue] ' name="" id="" />
                {/* <input type="text"    className='border border-[black] w-[400px] h-[40px] ms-[50px]  rounded-[10px] mt-[16px] ' placeholder=''  name="" id="" /> <br /> */}
            </form>


      {/* {arr[0].pass} */}

        </div>
        
        <div id="dd" className='w-[80%] h-[500px]  mt-[50px]  '>

        <Show   p_value={arr} />
        </div>
        </>
        
    )
}

export default Form
