


    let  Om={
        loading:false,
        success: false,
        data:[],
        error:false    

    }

  export const ProductReducer = (state =Om ,{type,payload}) => {

    switch (type) {
        case "Loading":
            return ({...Om,loading:true})
        
        case "Success":
             return ({...Om,loading:false,success: true, data: payload })
                
        case "Error":
            return ({...Om,loading:false,error :true })
                 
    
        default:
           return state
    }
  
}

export default ProductReducer
