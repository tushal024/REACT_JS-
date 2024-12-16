import { useEffect, useState } from "react"
import Show from "./show"



function Form() {
    let [pro, setpro] = useState({
        name1: "",
        img: "",
        price: "",
        des: ""
    })
    const [arr, setarr] = useState(JSON.parse(localStorage.getItem("data")) || []  )



    const change = (e) => {
        let { name,value } = e.target

        setpro({...pro,[name]:value })
    }

    
    
    const sub = (t) => {
        t.preventDefault()
        setarr([...arr, pro])
        console.log(arr);

        setpro({
            name1:"",
            img: "",
            price: "",
            des: ""

        })
    

    }



    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr))
    }, [arr])

    return (
        <>
            <form action="" onSubmit={sub} >

                <input type="text"   placeholder="Heading..."  value={pro.name1}  onChange={change} name="name1" />
                <input type="text"   placeholder="Image URL..."  value={pro.img}  onChange={change} name="img" />
                <input type="text"   placeholder="Price..."  value={pro.price}  onChange={change} name="price" />
                <input type="text"   placeholder="Des....."  value={pro.des}  onChange={change} name="des" />
                <input type="submit" name="" id="" />

            </form>

            <Show  pass={arr} />
        </>
    )

}



export default Form