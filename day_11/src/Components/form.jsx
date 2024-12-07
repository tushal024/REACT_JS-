import { useState } from "react"
import Show from "./Product"


function Form() {

    let [data, setdata] = useState({
        img: "",
        title: "",
        price: ""

    })
    let [arr, setarr] = useState([])
    

    function handel(e) {


        let { name, value } = e.target

        console.log(name)
        setdata({...data,[name]:value})

        console.log(data);


    }


    function sub(e) {
        e.preventDefault()

        setarr([...arr,data])
        console.log(arr);
        
        setdata({
            img:"",
            price:"",
            title:""
        })

        
        
    }
    
    // setem("")
    return <>

        <form action="" className=" rounded-[20px] pb-[20px] text-center w-[500px] m-[auto] border bg-[#FBFBFB]  mt-[10px]" onSubmit={sub}>
            <img src="https://i.pinimg.com/originals/ba/a8/cf/baa8cf086cb73b46ab28d6b9e3044ccb.gif"  className="w-[130px] h-[80px] m-auto"   alt="" />
            <h1 className="  text-[24px] ">Add New Product</h1>

            <input type="text"  required placeholder="Enter  Title"    value={data.title } className="border border-[gray]   mt-[30px]     ps-[20px]  w-[80%] h-[35px] rounded-[5px] " name="title" onChange={handel} /> <br /><br />
            <input type="text" required  placeholder="Enter Image URL"  value={data.img }  className="border border-[gray]    ps-[20px]  w-[80%] h-[35px] rounded-[5px] " name="img" onChange={handel} /> <br /><br />
            <input type="number"      required placeholder="Enter Price"    value={data.price } className="border border-[gray]           ps-[20px]  w-[80%] h-[35px] rounded-[5px] " name="price" onChange={handel} /> <br /><br />

            <input type="submit" className="w-[50%] h-[40px] border text-[white] cursor-pointer	 rounded-[5px] bg-[green] "  onClick={()=>setem("")} />
        </form>

        <Show  arr={arr} />
    </>
}


export default Form