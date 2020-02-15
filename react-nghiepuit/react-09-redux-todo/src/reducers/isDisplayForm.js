import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var initialState = false //close form

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state 

        case types.OPEN_FORM:
            state = true
            return state
        
        case types.CLOSE_FORM:
            state = false
            return state

        default: return state;
    }
}

export default myReducers