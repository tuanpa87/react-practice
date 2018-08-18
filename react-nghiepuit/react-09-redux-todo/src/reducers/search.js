import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var initialState = ''
   
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            console.log(action)
            return action.keyword
        default: return state;
    }
}

export default myReducers