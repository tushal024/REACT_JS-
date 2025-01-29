
let face={
    "Loading" :false,
    "Success":false,
    "ProductData":"",
    "Error":false,
    "obj":{}
}



  export let Reducer= ( state =face ,{type,payload})=>{

    switch (type) {
        case "Loading":
                return({...state, "Loading":true  })
            
        case "Success":
                return({...state,"Loading":false,"Success":true  })
         case "Data":
            return ({...state,"ProductData"  :payload })
                
         case "Error":
            return ({...state,"Loading":false,"Error":true,"Success":false })                  

         case "FindObj":
                return ({...state, "obj": payload })                  
        
        default: return state
            
    }

}