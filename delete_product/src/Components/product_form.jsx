import { useEffect, useState } from "react"
import Show from "./show"
import { v4 as uuidv4, v4 } from 'uuid';




function Form() {
    let [pro, setpro] = useState({
        id:v4(),
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
        setarr([...arr,{...pro,id:v4()}])
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



    function delete_1(id){

      let new_arr= arr.filter((t)=>{
        if(t.id != id){
            return t
        }

       })
        
       setarr(new_arr)

        console.log(id);
        

    }

// .........................................................................................
function edit(id){
    console.log(id);
    

}




    return (
        <>
            <form action="" onSubmit={sub} >

                <input type="text"   placeholder="Heading..."  value={pro.name1}  onChange={change} name="name1" />
                <input type="text"   placeholder="Image URL..."  value={pro.img}  onChange={change} name="img" />
                <input type="text"   placeholder="Price..."  value={pro.price}  onChange={change} name="price" />
                <input type="text"   placeholder="Des....."  value={pro.des}  onChange={change} name="des" />
                <input type="submit" name="" id="" />

            </form>

            <Show  pass={arr} delete_1={delete_1}   edit ={edit} />
        </>
    )

}



export default Form