import { combineReducers, legacy_createStore } from 'redux'
import { DES, INC } from './actionType'
import { TS } from './Render'
import { TS1 } from './More'


// let value = {
//     v1: 0,
//     v2:0

// }


const store1 = combineReducers({
   CC1:TS,
   CC2:TS1
})
// const oo={
//     CC1:TS,
//    CC2:TS1
// }




export const Tushal = legacy_createStore(store1)
// export const Tushal = legacy_createStore(oo)
//  export const Tushal1= legacy_createStore(TS1)

