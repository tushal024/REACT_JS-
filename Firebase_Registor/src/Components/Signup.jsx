import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Fire'
import { addDoc, collection, getDocs } from 'firebase/firestore'

const Signup = () => {

    const [email,setEmail]=useState("")
    const[pass,setpass]=useState("")
     
    const userData1= collection(db,"userdata" )
    // let s= getDocs(userData1)
    // console.log(userData1.docs);
     
    
   async function  Getdata(){

     let  dd =    await getDocs(userData1)

      console.log( dd.docs );
      dd.docs.map((e)=>{
        console.log({ id: e.id,...e.data()} );
        
      })

    } 

    useEffect(()=>{
      Getdata()
    },[])


        const sub= async (e)=>{
            e.preventDefault()

            let obj={
                email,
                pass
            }

            alert("Data Added...")
            await  addDoc(userData1,obj)
            Getdata()
            
          }

         

      //   const querySnapshot =  getDocs(userData1)
      //   querySnapshot.forEach((doc) => {
      //     console.log(doc.id, " => ", doc.data())
      // })
        
            
  return (
    <div>
                <form action=""  onSubmit={sub} >
                            <input type="text"  onChange={(e)=>setEmail(e.target.value)}    name="" placeholder='Name..'  id="" />    <br />
                            <input type="text"  onChange={(e)=>setpass(e.target.value)}    name="" id="" />    <br />
                            <input type="submit" name="" id="" />    


                </form>    
    </div>
  )
}

export default Signup
