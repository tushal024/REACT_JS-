import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore"
import { Mydata } from "../Firebase/Fire"
import { useSelector } from "react-redux"


 export let aa= []

export let Getdata = async (setArr) => {
       const DataCollection = collection(Mydata, "ProductData")
    const ShowData = await getDocs(DataCollection)



    let tt = ShowData.docs.map((e) => {



      return ({ id: e.id, ...e.data() })

    })
    
    // setArr(tt)

    aa= tt

    


  }





export    const Del=(ID)=>{
  
      let Single= doc(Mydata, "ProductData",ID)
  
      deleteDoc(Single)
      Getdata()
  
    }
  





     export const Edit=(ID)=>{
        
        // Dis(  {type: "Data",payload:ID } )
        console.log(Redu);
          localStorage.setItem("id",ID)
    
       
        console.log(Redu);
        Getdata()
    
    
        //  Navigat  ()
         
      
      }
    


      
      
      
      //   console.log(Sell.obj);
      


      
  export      const sub = (e) => {
      e.preventDefault();
      
      let ss=localStorage.getItem("obj")
      console.log(ss);
       let oo= JSON.parse(ss)

      

    
      
        let Sell = useSelector( st  =>st)
      
    // console.log(Sell);

    let PR_id = localStorage.getItem("id")
      
 
          const DataCollection = collection(Mydata, "ProductData")

          addDoc(DataCollection , oo )
      
        //   if (PR_id && aa.length > 0) {
      
        //     let T = doc(Mydata, "ProductData", PR_id)
      
        //     updateDoc(T, obj)
      
      
        //     localStorage.clear()
      
        //     navv("/List")
      
        //   }
        //   else {
      
        //     console.log(obj);
        //     addDoc(DataCollection, obj)
      
        //   }
      
      
      
      
      
      
        }
      