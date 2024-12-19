import { useEffect, useState } from "react"
import Show from "./show"
import { v4 as uuidv4, v4 } from 'uuid';




function Form() {
    let [pro, setpro] = useState({
        id: v4(),
        name1: "",
        img: "",
        price: "",
        des: ""

    })

    let [bt, setbt] = useState("")
    let [d_arr,setd_arr]=useState([])
    let[tr,settr]=useState(false)
    const [arr, setarr] = useState(JSON.parse(localStorage.getItem("data")) || [])



    const change = (e) => {
        let { name, value } = e.target

        setpro({ ...pro, [name]: value })
    }



    const sub = (t) => {
        t.preventDefault()

        settr(false)

        setarr([...arr, { ...pro, id: v4() }])
        console.log(arr);

        setpro({

            name1: "",
            img: "",
            price: 0,
            des: ""

        })


    }



    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr))
    }, [arr])



    function delete_1(id) {

        let new_arr = arr.filter((t) => {
            if (t.id != id) {
                return t
            }

        })

        setarr(new_arr)

        console.log(id);


    }

    function Edit(id) {     
        // console.log(id);
        

        let t = arr.map((e) => {

            if (e.id == id) {
                setpro({ ...pro, ...e })
                // return {...pro,...e}
            }
        })

        setbt(id)
        console.log(bt);
        
    }


    function e_d() {

        console.log(bt);
        
        let t = arr.map((e) => {
            if (bt == e.id) {
                console.log(e);
                
                return { ...e, ...pro }
            }
            else {
                return e
            }
        })


        setarr(t)
    }


    const sel_change=(r)=>{

        let{value}= r.target
       
        let ts=   arr.filter((e)=>{

            if(value=="down"){
                return e.price<=500
            }
            if(value == "mid"){
                return e.price >=500 && e.price <=1000
            }
            if(value == "up"){
                return e.price>1000
            }
            if(value == "old"){
                // console.log(arr);
                return (
                    e
                    
                )
            }

            
        })

     

        setd_arr(ts)
        
        
        // setarr([...arr,ts])

      
        // console.log(ts);
        
        settr(true)



     

    }


   
    function sort1 (s){
        
        
        
        let tus= arr.sort((a, b) => b.price - a.price )
        // console.log(tus);
        settr(true)

        setd_arr(tus)

    }   




    return (
        <>
            <form action="" onSubmit={sub} >

                <select name="" id="sel"   onChange={sel_change} >
                    <option value="old">  ...SELECT... </option>
                    <option value="down">  0 To 500  </option>
                    <option value="mid"> 500 TO 1000   </option>
                    <option value="up">  1000 TO UP  </option>
                </select>



                <button  onClick={sort1} type="button" >  SORT </button> 

                <input type="text" placeholder="Heading..." value={pro.name1} onChange={change} name="name1" />
                <input type="text" placeholder="Image URL..." value={pro.img} onChange={change} name="img" />
                <input type="number" placeholder="Price..." value={pro.price} onChange={change} name="price" />
                <input type="text" placeholder="Des....." value={pro.des} onChange={change} name="des" />

                {bt == "" ? "" : <input type="button" value={"EDIT"} onClick={e_d} name="" id="" />}




                <input type="submit" name="" id="" />

            </form>

            <Show pass={arr} delete_1={delete_1} Edit={Edit}  d_arr={d_arr}  tr={tr} />
        </>
    )

}



export default Form