import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const WW = () => {

     let [ob, setob] = useState({
            title: "",
            img: "",
            price: ""
    
        })

        let gg= useNavigate()

    
    function change1(e) {
        let { name, value } = e.target

        setob({ ...ob, [name]: value })
        // console.log(ob);
    }


    let {id}= useParams();
    console.log(id);
    



    useEffect(()=>{
        fetch(`http://localhost:3000/data/${id}`)
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res)
        
            setob(res)
        })
        .catch((er) => {
            console.log(er);


        })

    },[])
    
    function subb(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/data/${id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(ob)

        })
        .then((r) => {
            return r.json();
        })
        .then((res) => {
            console.log(res)
        
            // setob(res)
        })
        .catch((er) => {
            console.log(er);


        })

     
        gg("/List")
          
    }

    return (
        <div  className='  w-[30%] pb-[50px] pt-[30px] rounded-[10px]  border-[darkgray] border  shadow-lg shadow-gray-500/50  m-[auto] mt-[50px]  '>
            <form action="" onSubmit={subb} className='w-[100%] m-[auto]  border-[gray]' >

                <input type="text"   className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px] '    value={ob.img} name='img' placeholder='Img' onChange={change1} /> <br /><br />
                <input type="text"   className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px] '    value={ob.title} name='title' placeholder='Title' onChange={change1} />    <br /><br />
                <input type="text"   className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px] '    value={ob.price} name='price' placeholder='Price' onChange={change1} /> <br /><br />
                {/* <input type="button" onClick={ak} value={"EDIT OKKK"} name="" id="" /> */}

                <input type="submit" className='w-[50%] border  rounded-[7px] bg-[black]  text-[white] ms-[25%] h-[35px]'  />
            </form>
        </div>
    )
}

export default WW
