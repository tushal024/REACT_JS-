import { useState } from "react"
import Show from "./Product"


function Form() {

    let [data, setdata] = useState({
        img: "",
        title: "",
        price: 0

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
            img:""
        })

        
        
    }
    
    // setem("")
    return <>

        <form action="" onSubmit={sub}>

            <input type="text"  value={data.img }  className="border border-[gray]" name="img" onChange={handel} /> <br /><br />
            <input type="text"    value={data.title } className="border border-[gray]" name="title" onChange={handel} /> <br /><br />
            <input type="text"    value={data.price } className="border border-[gray]" name="price" onChange={handel} /> <br /><br />

            <input type="submit"  onClick={()=>setem("")} />
        </form>

        <Show  arr={arr} />
    </>
}


export default Form