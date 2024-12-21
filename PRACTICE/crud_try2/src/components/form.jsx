import { useState } from "react"
import Show from "./show"
import { v4  } from 'uuid';


function Form(){
    let[arr,setarr]=useState([])
    let[ttt,setttt]=useState("")
    let[obj,setobj]=useState({
        id:v4(),
        img:"",
        title:"",
        price:""
    })
        function change(e){
            let{name,value}=e.target
            setobj({...obj,[name]:value})


        }

        function sub(t){
            t.preventDefault();
            setarr([...arr,{...obj,id:v4()}])

            console.log(arr);
            }

            function dell(d_id){

                console.log(d_id);

          let ss=      arr.filter((e)=>{
                    if(e.id != d_id){
                        return e

                    }
                })
                

                setarr(ss)
            }



            function edit(e_id){
                console.log(e_id);
                
                
                arr.map((e)=>{
                    if(e.id == e_id){
                        setobj({...obj,...e})
                    }
                })
                setttt(e_id)
                console.log(ttt);
                

            }


            function t_ed(){
                console.log(ttt);
                

             let ooo =   arr.map((e)=>{
                    if(e.id == ttt){
                        console.log("okkk");
                        console.log(e);
                        
                        return {...obj}
                        
                    }
                    else{
                        return e
                    }
                })


                setarr(ooo)

                
            }


    return (
        <>
        <form action="" onSubmit={sub}>
            <input  onChange={change}  value={obj.img}  name="img" type="text" />
            <input  onChange={change}  value={obj.title}  name="title" type="text" />
            <input  onChange={change}  value={obj.price}  name="price" type="text" />
        <input type="button"  onClick={t_ed} value={"EDITTT"} />

            <input type="submit" />

            </form>

            <Show  arr={arr}  dell={dell}  edit={edit}/>
        </>
    )
}


export default Form