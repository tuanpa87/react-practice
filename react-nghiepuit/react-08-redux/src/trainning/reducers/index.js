import status from './status' //reducer status
import sort from './sort'  //reducer status
import { combineReducers } from 'redux'

const myReducer = combineReducers({
    //ben trai la ten state: ben phai la ten reducer
    status: status, 
    sort: sort 
})

export default myReducer