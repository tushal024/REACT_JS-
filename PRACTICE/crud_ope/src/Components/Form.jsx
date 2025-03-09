import React, { useState } from 'react'
import { v4 } from 'uuid'

const Form = () => {

    let [obj,setobj]=useState({
        // id: v4(),
        user:"",
        email:""
    })
    let [ED,setED]=useState(false)
    let [Edit_id,setEdit_id]=useState("")

    let[arr,setarr]=useState([])


    const sub=(e)=>{
        e.preventDefault()
        // console.log(obj);



        if(ED){
         let New_arryy=   arr.map((e)=>{
                if(Edit_id==e.id){

                    console.log(e);
                    // set
                   return {...e,user:obj.user,email:obj.email}
                }
                else{
                    return e
                }
            })

            setarr(New_arryy)
        }
        else{

            setarr([...arr,obj])
        console.log(arr);
        setobj({
            user:"",
            email:""
        })

        }

        
        
        
    }

    const changee=(e)=>{
        let {name,value}= e.target

        // console.log(value);

        setobj({...obj,[name]:value,id: v4()})
        
    }
    const del=(idd)=>{
        
        let New_arry=  arr.filter((e)=>{
            return idd != e.id
        })

        setarr(New_arry)
    }

    const Edit=(idd)=>{
        setEdit_id(idd)
        setED(true)
    let New_arry=      arr.filter((e)=>{
            return idd== e.id
        })
        
            // console.log(New_arry[0]);
            
        setobj( New_arry[0])
    }
     

  return (
    <div>
        <form action="" onSubmit={sub}  >
      <input type="text" value={obj.user}   name='user'  onChange={changee}  />
      <input type="text" value={obj.email}   name='email'  onChange={changee}  />
      <input type="submit"  value={ED ? "EDIT" : "SUBMIT" }  />
      </form>

      <div>
        

        {arr.map((e)=>{
            return (
                <  >
                <div key={e.id} >
                       Name: {e.user} <br />
                       Email: {e.email} <br />
                       {/* Id : {e.id} <br /> */}
                       <button  onClick={()=>del(e.id)} >Delete</button>
                       <button  onClick={()=>Edit(e.id)} >Edit</button>

                       ..........................................
                       <br /><br />
                       </div>
                </>
            )
        })}
      </div>
    </div>
  )
}

export default Form
