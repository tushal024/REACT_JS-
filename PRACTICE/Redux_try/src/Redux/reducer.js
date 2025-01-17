

let val=0

 export let ts=(state=0,action)=>{

    switch (action.type) {
        case "one":
            return state+2
            
    
        default:
            return state
    }



} 