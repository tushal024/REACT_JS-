import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Mydata } from '../Firebase/Fire'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const ProductList = () => {

  const DataCollection = collection(Mydata, "ProductData")
  const [Arr,setArr]=useState([])
  


  
  let Redu= useSelector(st=>st)
  let Dis= useDispatch()
  // console.log(Redu);
  
  


  let Getdata = async () => {
    const ShowData = await getDocs(DataCollection)



    let tt = ShowData.docs.map((e) => {



      return ({ id: e.id, ...e.data() })

    })
    setArr(tt)

    






  }
  Getdata()  

  
  // useEffect(()=>{

  //    function ss(){
   


  //     }

      





  
    
  

  // },[])


  setTimeout(()=>{

    Dis({type:"Data",payload: Arr })
    // console.log(Redu);
    

  },1000)


  // console.log(Redu);
  
  



  const Del=(ID)=>{

    let Single= doc(Mydata, "ProductData",ID)

    deleteDoc(Single)
    Getdata()

  }




  
  const Edit=(ID)=>{
    
    // Dis(  {type: "Data",payload:ID } )
    console.log(Redu);
      localStorage.setItem("id",ID)

   
    console.log(Redu);

    //  Navigat  ()
     
    




    
    



  }



  return (
    <div>

        {
          Arr.map((e)=>{
            return (
              <div key={e.id} >
                <img src={e.URL} alt="Not Found" />
                <h4> {e.Title} </h4>
                <h4>  {e.Price} </h4>
                <button  onClick={()=>Del(e.id)} >  DELETE </button>
                <button onClick={()=>Edit(e.id)} >   <Link to='/Form'>    EDIT  </Link>   </button>
                .................................
              </div>
            )
          })
        }



    </div>
  )
}

export default ProductList
