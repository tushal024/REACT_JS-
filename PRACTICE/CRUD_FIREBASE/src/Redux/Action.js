import { addDoc, collection, getDocs } from "firebase/firestore";
import { DataBase } from "../Firebase/Firebase";


let collection1 = collection(DataBase, "Product")



export function Add(obj) {

    addDoc(collection1, obj)

    console.log(ss);
}

  export  async  function Get (){

     let data1  =  await  getDocs(collection1)

   return data1.docs.map((e)=>{
        return ({id : e.id , ...e.data()})
    })
 //    console.log(DD);   
}