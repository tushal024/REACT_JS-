
import { combineReducers, legacy_createStore } from "redux"
import { Red } from "./Reducer"
import { ProductReducer } from "./ProductReducer"



let All = combineReducers({
    Red,
    ProductReducer


})

 
 export let St1= legacy_createStore(All)