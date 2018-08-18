import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var initialState = {
    name: '',
    status: -1 //all: -1, active: 1, deactive : 0
}

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            console.log(action)
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            }

        default: return state;
    }
}

export default myReducers