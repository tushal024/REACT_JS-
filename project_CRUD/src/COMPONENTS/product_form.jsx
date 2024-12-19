import { useEffect, useState } from "react"
import Show from "./show"
import { v4 as uuidv4, v4 } from 'uuid';
import { use } from "react";




function Form() {
    // let[bt,setbt]=useState("")
    let[bt,setbt]=useState("")
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


    function Edit_data(ID){

            let a= arr.map((e)=>{
                if(e.id== ID){

                    // return console.log(e);

                    setpro({...pro,...e})
                    
                }
                else {
                    return e
                }
            })

            setbt(ID)
        
        

    }



    function E_data(){
      let ss=  arr.map((e)=>{
            if( bt == e.id){
                // console.log(e);
                
                
          return  {...e,...pro}
                
                
                
            }
            else{
                return e
            }
        })

        setarr(ss)

        setpro({
    
            name1:"",
            img: "",
            price: "",
            des: ""

        })


        setbt("")
        
    

    }

  
    return (
        <>
            <form action="" onSubmit={sub} >

                <input type="text"   placeholder="Heading..."  value={pro.name1}  onChange={change} name="name1" />
                <input type="text"   placeholder="Image URL..."  value={pro.img}  onChange={change} name="img" />
                <input type="text"   placeholder="Price..."  value={pro.price}  onChange={change} name="price" />
                <input type="text"   placeholder="Des....."  value={pro.des}  onChange={change} name="des" />
            {
                // bt== ""? "":<input type="button" name="" value={"Edit"} id="" onClick={new_edit} />

            }
            { bt== ""? "" : <input type="button" value={"EDIT"} name="" id=""  onClick={E_data} /> }
                
                
                <input type="submit" name="" id=""   />

            </form>
            
            
               <Show  pass={arr} delete_1={delete_1}   Edit_data={Edit_data}  />
        </>
    )

}



export default Form