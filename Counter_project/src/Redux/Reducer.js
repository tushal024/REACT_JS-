import { st } from "./Store"




let value = {
    tt1: 0,
    tt2: 2,
    tt3: 2
}


export let Shop = (state = value, { type, payload }) => {


    switch (type) {
        case "INC":
            return { ...state, tt1: state.tt1 + 5 }

        case "DES":
            return { ...state, tt1: state.tt1 - 5 }


        case "SQ":
            return { ...state, tt2: state.tt2 * state.tt2 }

        case "SQ1":
            return { ...state, tt2: state.tt2 / 2 }

        case "IN":
            return { ...state, tt3: state.tt3 * payload }


        default:
            console.log(state);

            return state
    }
} 
