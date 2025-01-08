import { st } from "./Store"




let value = {
    tt1: 0,
    tt2: 2,
    tt3: 2
}

let h=0

export let Shop = (state = value, { type, payload }) => {


    switch (type) {
        case "INC":
            return { ...state, tt1: state.tt1 + 5 }

        case "DES":
            return { ...state, tt1: state.tt1 - 5 }


        case "SQ":
            return { ...state, tt2: state.tt2 * state.tt2 }

        case "SQ1":
            h=(state.tt2/2/2)
            // console.log(h/2);
            

            console.log( state.tt2/h );
            
            return { ...state, tt2:   state.tt2 / h  }

        case "IN":
            return { ...state, tt3: state.tt3 * payload }


        default:
            console.log(state);

            return state
    }
} 
