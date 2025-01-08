import {combineReducers, legacy_createStore} from 'redux'
import { ss } from './C1'
import { S2 } from './C2'


let sss=combineReducers({
    one:ss,
    second:S2
})


let S1= legacy_createStore(sss)


export default S1