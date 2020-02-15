import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var initialState = {
    by: '',
    value: 1 // tang: 1, giam : -1
}

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            console.log(action)
            return {
                by: action.sort.by,
                value: action.sort.value,
            }

        default: return state;
    }
}

export default myReducers