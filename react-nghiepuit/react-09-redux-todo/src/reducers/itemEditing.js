import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var initialState = {
    id: '',
    name: '',
    status: false
}

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            console.log(action)
            return action.task 

        default: return state;
    }
}

export default myReducers