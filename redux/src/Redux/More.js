
let ss=0


 export const TS1=(state = ss ,action)=>{

    switch (action.type) {
        case 'INC':
            // console.log(state.v1);
            
            // return state.v1+1
            return state +1
            
            case 'DES':
                // return state.v1-1
                return state -1
                    
    
        default:
            
            return state
    }

}