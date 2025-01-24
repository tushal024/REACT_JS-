import { getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Fire'
import { collection } from 'firebase/firestore';

const Login = () => {

  const[User,setUser]=useState("")
  const[Pass,setPass]=useState("")



  let [t, seT] = useState([])

  // const Data= getDoc( userData)
  // console.log(Data);
  useEffect(() => {


    // console.log(getDocs(db));


  }, [])


  const userData1 = collection(db, "userdata")

  async function Getdata() {

    let dd = await getDocs(userData1)

    console.log(dd.docs);
    dd.docs.map((e) => {

            // if()

      console.log({ id: e.id, ...e.data() });

    })

  }


  function sub(e){
    e.preventDefault()

    // console.log(User,Pass);

    
    
  }

  Getdata()


  return (
    <div>
      <form action=""  onSubmit={sub} >

        <input  onChange={(e)=>setUser(e.target.value)}  type="text" placeholder='Username...' />  <br />
        <input  onChange={(e)=>setPass(e.target.value)}  type="password" placeholder='Password...' />  <br />

        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
