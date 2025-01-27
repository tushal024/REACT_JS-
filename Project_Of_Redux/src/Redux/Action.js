import axios from "axios"



 export const Fetchdata= (dis)=>{

    


     dis({type:"Loading"})
    axios.get(`https://dummyjson.com/products`)


    .then((res)=>{

        // setstate(res.data.products)
        console.log(res.data.products);
        dis({type:"Success",payload:res.data.products})

    })


    .catch((er)=>{
        console.log(er)
        dis({type:"Error"})
        
    })



}


