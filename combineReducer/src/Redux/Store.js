
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { Red } from "./Reducer"
import { ProductReducer } from "./ProductReducer"
import { thunk } from "redux-thunk"



let All = combineReducers({
    Red,
    ProductReducer


})

 
 export let St1= legacy_createStore(All,applyMiddleware(thunk) )