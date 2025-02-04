import { legacy_createStore } from "redux";
import { MyReducer } from "./Reducer";

export  let MyStore  = legacy_createStore(MyReducer)