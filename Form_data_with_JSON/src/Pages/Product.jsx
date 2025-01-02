import React, { useEffect, useState } from 'react'
import Mapping from '../Components/Mapping';
import Show from './Show';

function Product() {

    let [ss, setss] = useState([])
    let [con, setcon] = useState(true)
    let [ob, setob] = useState({
        title: "",
        img: "",
        price: ""

    })


    // let [tus, settus] = useState(localStorage.getItem("t"))
    // console.log(tus);


    useEffect(() => {

        fetch(`http://localhost:3000/data`)
            .then((r) => {
                return r.json();
            })
            .then((res) => {
                console.log(res)


                // setss(res)
                console.log(ss);



            })
            .catch((er) => {
                console.log(er);


            })

    }, [])




    ss.filter((e) => {
        if (localStorage.getItem("idd") == e.id) {
            console.log(e);

            setob({ ...ob })
        }
        else {
            return e
        }
    })



    // useEffect(()=>{
    //     fetch(`http://localhost:3000/data`)
    //     .then((r)=>{
    //         return r.json();
    //     })
    // },[])



    function change1(e) {
        let { name, value } = e.target

        setob({ ...ob, [name]: value })
        // console.log(ob);
    }



    function subb(e) {
        e.preventDefault()
     
    
            fetch(`http://localhost:3000/data`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },

                body: JSON.stringify(ob)

            })
                .then((r) => {
                    return r.json();
                })
                .then((res) => {
                    console.log(res)
                        // setob([...ob,res])

                   
                    console.log(ss);



                })
                .catch((er) => {
                    console.log(er);


                })

       



    }
    // console.log(ss);






    console.log("helo");
    console.log(ss);
    


    function ak() {
        console.log(ss);
        console.log(localStorage.getItem("idd"));

        let coco = ss.map((e) => {
            if (localStorage.getItem("idd") == e.id) {
                return ({ ...ob, ...e })
            }
            else {
                return e
            }
        })

        setss(coco)
        console.log(ss);
        
        setcon(!con)

    }



    return (
        <div className='w-[30%] pb-[50px] pt-[30px] rounded-[10px]  border-[darkgray] border  shadow-lg shadow-gray-500/50  m-[auto] mt-[50px]'>

            <h1 className='text-[30px] font-[600] text-center' > Add  Product </h1>
            <form action="" onSubmit={subb} className='w-[100%] m-[auto]  border-[gray]' >

                <input type="text"  className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]'  value={ob.title} name='title' placeholder='Title' onChange={change1} />    <br /><br />
                <input type="text"  className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]'  value={ob.img} name='img' placeholder='Img' onChange={change1} /> <br /><br />
                <input type="text"  className='border mt-[10px] rounded-[7px]  w-[90%]  h-[35px] ms-[5%] ps-[20px]'  value={ob.price} name='price' placeholder='Price' onChange={change1} /> <br /><br />
                {/* <input type="button" onClick={ak} value={"EDIT OKKK"} name="" id="" /> */}

                <input type="submit"  className='w-[50%] border  rounded-[7px] bg-[black]  text-[white] ms-[25%] h-[35px]' />
            </form>


            {/* <Mapping  ss={ss} /> */}
            {/* <Show ob={ob} setob={setob}  /> */}

        </div>
    )
}

export default Product
