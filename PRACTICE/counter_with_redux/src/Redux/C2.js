


let nn= 0

 export let S2= (state = nn ,action)=>{

    switch (action.type) {
        case "INCC":
          return state+1  
          
        default:
            return state
            
    }


}