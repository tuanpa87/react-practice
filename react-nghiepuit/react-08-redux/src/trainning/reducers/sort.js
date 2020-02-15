var initialState = {
    by: 'status',
    value: 1 //1 tu a-z, -1 tu z-z
}

var myReducer = (state = initialState, action) => {

    if(action.type === 'SORT') {
        var {by, value} = action.sort; //by = action.by
    
         //cap nhat trang thai moi
        return {
            by: by,
            value: value
        }
    }
    return state;
}

export default myReducer