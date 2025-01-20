import axios from "axios"


export const Act=(diss)=>(email)=>{
    diss({type:"Loading"})


    axios.get(`http://localhost:3000/user?email=${email}`)
    .then((res) =>{

        console.log(res.data)
        diss({type:"isLogin",payload:res.data[0].username})
        // navv('/product')
    } 
    
    )
    .catch((er)=>{
        console.log(er);
        diss({type:"error"})
        
    })
}