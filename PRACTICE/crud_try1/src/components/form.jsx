import { useState } from "react"
import Show from "./show"





function Form() {

    let[ss,setss]=useState("")
    let [obj, setobj] = useState({
        id: 0,
        img: "",
        title: "",
        price: ""
    })
    let [arr, setarr] = useState([])
    const change = (t) => {
        let { name, value } = t.target

        setobj({ ...obj, [name]: value })

    }

    const sub = (t) => {
        t.preventDefault()
        setarr([...arr, { ...obj, id: arr.length }])

        console.log(arr);





    }
    function edit(idd) {
        console.log(idd);
        let op=    arr.map((e)=>{
            if(e.id== idd){
                setobj({...e})
                // console.log({...e});
                
            }

        })

            setss(idd)
        



    }


        function edd(idd){

            console.log(idd);
            

       let uu=     arr.map((e)=>{
                if(e.id == ss ){

                    return {...e,...obj}
 
                }
                else{
                    return e
                }
            })

            setarr(uu)



          

        }




    function del(idd) {
        console.log(idd);

        let ss = arr.filter((e) => {
            if (e.id != idd) {
                return e

            }


        })

        setarr(ss)


    }

    return (
        <>
            <form action="" onSubmit={sub}>
                <input value={obj.img} type="text" name="img" onChange={change} />
                <input value={obj.title} type="text" name="title" onChange={change} />
                <input value={obj.price} type="text" name="price" onChange={change} />
                <input type="button" value={"edit"}   onClick={edd } name="" id="" />
                <input type="submit" />

            </form>

            <Show arr={arr} del={del} edit={edit} />
        </>
    )

}


export default Form