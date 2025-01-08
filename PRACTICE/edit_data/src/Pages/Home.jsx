import React, { useState } from 'react'
import Product from './Product'

function Home() {


  let [obj, setobj] = useState({

    name1: "",
    price: ""
  })
  let[oo,setoo]=useState(true)


  let [arr, setarr] = useState([])


  let change = (e) => {
    let { name, value } = e.target
    // console.log(e.target);


    setobj({ ...obj, [name]: value })

    console.log(obj);


  }
  let sub = (e) => {
    e.preventDefault()
    setarr([...arr, { ...obj, id: arr.length }])
    console.log(arr);

    setobj({
      name1: "",
      price: ""

    })



  }


  if(localStorage.getItem("id")){
    // setoo(!oo)
    console.log(arr);
    
    console.log(localStorage.getItem("id"))
     let tt  = arr.filter((e)=>{
      return e.id
      
      // if(localStorage.getItem("id")  == e.id ){

      //   setobj(e)
      // }
    })
    console.log(tt);
    

  }

  
  



  return (
    <div>


      <form action="" onSubmit={sub} >

        <input type="text"     value={obj.name1} name="name1" onChange={change} id="" />
        <input type="text"     value={obj.price}  name="price" onChange={change} id="" />
        <input type="submit"      name="" id="" />
      </form>

      <Product arr={arr} />

    </div>
  )
}

export default Home
