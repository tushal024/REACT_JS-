

let Default_value = {
    Loading:false,
    Success:false,
    Data:[],
    Error:false

}


   export const ProductReducer= (state= Default_value,{type,payload})=>{

    switch (type) {
        case "Loading":
            return {...state,Loading:true}
            
        case "Success":
            return {...state,Loading:false,Success:true,Data:payload}    
        
        case "Error":
            return {...state,Loading:false,Error:true}    
    
        default: return state;
            
    }

}