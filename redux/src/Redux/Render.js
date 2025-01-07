
let ss=0


 export const TS=(state = ss ,action)=>{

    switch (action.type) {
        case 'INC1':
            // console.log(state.v1);
            
            // return state.v1+1
            return state +1
            
            case 'DES1':
                // return state.v1-1
                return state -1
                    
    
        default:
            
            return state
    }

}