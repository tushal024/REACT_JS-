


 let value= 0


   export let ss = (state = value ,action)=>{

    // console.log(action.type);
    let nn= 0
    
    switch (action.type) {
        case "INC":
     
            return state +1;
            
            case "DES":
                return state -1;
                
    
        default:
            return state;
    }

  }