import React, { useEffect, useState } from 'react'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { Mydata } from '../Firebase/Fire'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import ProductList from './ProductList'
import { sub } from '../Redux/Action'


const ProductForm = () => {

  const [obj, setobj] = useState({
    Title: "",
    Price: "",
    URL: ""
  })
  const [Arr, setArr] = useState([])
  let PR_id = localStorage.getItem("id")

  let navv = useNavigate()



  let Sell = useSelector(st => st)
  let Dis = useDispatch()

  // console.log(Sell);


  let ID = Sell.ProductData

  // PASS 'ID' IN depandency Arry
  useEffect(() => {
    setArr(ID)
  }, [ID])



  useEffect(() => {


    if (Arr.length > 0 && PR_id) {

      let product = Arr.filter((e) => {
        if (PR_id == e.id) {
          // console.log(e);
          return e



          // setobj(e)

        }
      })
      console.log(product);
      

      setobj({
        Title: product[0].Title,
        Price: product[0].Price,
        URL: product[0].URL,

      })


      // console.log(ss)

      // setobj(ss)
      // console.log(obj[0]);


    }

  }, [PR_id, Arr])

  //   function ED(){




  //   }



  //   if(PR_id.length>0 ){

  //     setTimeout(() => {

  //       ED()


  //     }, 100);

  //   }







  console.log(Arr);


  const change = (e) => {
    const { name, value } = e.target

    setobj({ ...obj, [name]: value })


    
    //  Sell = useSelector(st => st)
    //  Dis = useDispatch()


    Dis({type:"FindObj", payload: obj })

    console.log(Sell.obj);

    localStorage.setItem("obj", JSON.stringify( obj))
    

  }




  // const sub = (e) => {

  //   e.preventDefault();
  //   const DataCollection = collection(Mydata, "ProductData")

  //   if (PR_id && Arr.length > 0) {

  //     let T = doc(Mydata, "ProductData", PR_id)

  //     updateDoc(T, obj)


  //     localStorage.clear()

  //     navv("/List")

  //   }
  //   else {

  //     console.log(obj);
  //     addDoc(DataCollection, obj)

  //   }






  // }




  return (
    <div>
      <h1>  ProductForm  </h1>

      <form action="" onSubmit={sub}>

        <input type="text" placeholder='Product Title...' onChange={change} name='Title' value={obj.Title} />    <br />
        <input type="text" placeholder='Product Price...' onChange={change} name='Price' value={obj.Price} />    <br />
        <input type="text" placeholder='Product URL...' onChange={change} name='URL' value={obj.URL} />    <br />
        <input type="Submit" />


      </form>


      <div>
        {/* <ProductList/> */}
      </div>

    </div>
  )
}

export default ProductForm
