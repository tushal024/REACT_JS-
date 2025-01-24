import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Fire'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

const Signup = () => {

  const [email, setEmail] = useState("")
  const [pass, setpass] = useState("")
  const [obj, setobj] = useState({})
  const [arr, setarr] = useState([])
  const [s, sets] = useState(true)
  let dd = null
  const [ID, setID] = useState('')

  const userData1 = collection(db, "userdata")
  console.log(arr);


  async function Getdata() {
    dd = await getDocs(userData1)   
          
    let ooo = dd.docs.map((e) => {
      return ({ ...obj, id: e.id, ...e.data() });
    })
    setarr(ooo)
  }

  useEffect(() => {
    Getdata()
  }, [])


  const sub = async (e) => {
    e.preventDefault()

    let obj = {
      email,
      pass
    }

    if( ID == ""  ){

      alert("Data Added...")
      await addDoc(userData1, obj)
      // console.log(arr);
      sets(!s)

    }
    else{
      let data2= doc(db,"userdata",ID) 
     await updateDoc(data2,obj)
    }
    Getdata()

      setEmail("")
      setpass("")


  }




  function edit(P_id) {
    
    setID(P_id)

    arr.forEach((e) => {
      if (P_id == e.id) {
        setEmail(e.email)
        setpass(e.pass)
      }
    })

  }


  function del(P_id) {
    let single_ele = doc(db, "userdata", P_id)
    deleteDoc(single_ele)
    Getdata()
  }

  return (
    <div>
      <form action="" onSubmit={sub} >
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} name="" placeholder='Name..' id="" />    <br />
        <input type="text" onChange={(e) => setpass(e.target.value)} value={pass} name="" id="" />    <br />
        <input type="submit" name="" id="" />


      </form>
      <div>

        {
          arr.map((e) => {
            return (
              <>
                <p> Email: {e.email} </p>
                <p>  PassWord: {e.pass} </p>

                {/* {e.id} */}
                <button onClick={() => edit(e.id)} > Edit  </button>
                <button onClick={() => del(e.id)}  > Delete </button>
                ..................................................................................
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Signup
