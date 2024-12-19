import { useEffect, useState } from "react"
import Show from "./show"
import { v4 as uuidv4, v4 } from 'uuid';




function Form() {
    let [bt, setbt] = useState("")
    let [t_arr, sett_arr] = useState([])
    let [tt, settt] = useState(false)

    let [pro, setpro] = useState({
        id: v4(),
        name1: "",
        img: "",
        price: "",

        des: ""

    })
    const [arr, setarr] = useState(JSON.parse(localStorage.getItem("data")) || [])



    const change = (e) => {
        let { name, value } = e.target

        setpro({ ...pro, [name]: value })
    }



    const sub = (t) => {
        t.preventDefault()

        settt(false)

        console.log(t.id);
        if (bt == "") {
            setarr([...arr, { ...pro, id: v4() }])
            console.log(arr);

            setpro({

                name1: "",
                img: "",
                price: "",
                des: ""

            })



        }
        else {

            let st = arr.map((e) => {
                if (e.id == bt) {

                    return (
                        { ...e, ...pro }
                    )
                }
                else {
                    return e
                }



            })

            setarr(st)
            setbt("")

            setpro({

                name1: "",
                img: "",
                price: "",
                des: ""

            })
        }



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


    function Edit_data(id) {

        console.log(id);
        setbt(id)


        let N_arr = arr.map((e) => {
            if (e.id == id) {
                return (
                    setpro({ ...pro, ...e })

                )


            }

            else {
                return e
            }
        })



    }

    function new_edit(e) {

        let st = arr.map((e) => {
            if (e.id == bt) {

                return (
                    { ...e, ...pro }
                )
            }
            else {
                return e
            }



        })

        setarr(st)
        setbt("")

        setpro({

            name1: "",
            img: "",
            price: "",
            des: ""

        })


    }

    function sort1(t) {
        settt(true)
        setarr([...arr])
        let { value } = t.target
        console.log(value)
        if(value == "old"){
            settt(false)
            
          

        }

        if (value == "lh") {

            let t = arr.sort((a, b) => a.price - b.price)
            console.log(t_arr)    
            sett_arr(t)
        }

        if (value == "hl") {
            // console.log();
            console.log(t_arr)    
            let t = arr.sort((a, b) => b.price - a.price)
            sett_arr(t)
        }


        

       



    }



    return (
        <>
            <form action="" onSubmit={sub} >
                <select name="" id="sel" onChange={sort1} >
                    <option value="old"> ...Sorting... </option>
                    <option value="hl"> High To Low </option>
                    <option value="lh">  Low To High </option>


                </select>

                <input type="text" placeholder="Heading..." value={pro.name1} onChange={change} name="name1" />
                <input type="text" placeholder="Image URL..." value={pro.img} onChange={change} name="img" />
                <input type="number" placeholder="Price..." value={pro.price} onChange={change} name="price" />
                <input type="text" placeholder="Des....." value={pro.des} onChange={change} name="des" />
                {
                    // bt== ""? "":<input type="button" name="" value={"Edit"} id="" onClick={new_edit} />
                }


                <input type="submit" name="" id="" value={bt == "" ? "SUBMIT" : "EDIT"} />

            </form>


            <Show pass={arr} delete_1={delete_1} Edit_data={Edit_data} tt={tt} t_arr={t_arr} />
        </>
    )

}



export default Form