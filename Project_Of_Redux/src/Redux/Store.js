import { applyMiddleware, legacy_createStore } from "redux";
import ProductReducer from "./ProductReducer";
import { thunk } from "redux-thunk";



  export let store= legacy_createStore(   ProductReducer, applyMiddleware(thunk) )