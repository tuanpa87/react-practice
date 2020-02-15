import { createStore } from 'redux';

var initialState = {
    status: false,
    sort: {
        by: 'name',
        value: 1 //1 tu a-z, -1 tu z-z
    }
}

var myReduce = (state = initialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state.status = !state.status
        return state
    }

    if(action.type === 'SORT') {
        var {by, value} = action.sort; //by = action.by
        var {status}  = state;

        // state.sort = {
        //     by: action.sort.by,
        //     value: action.sort.value
        // }
        // return state

        //cap nhat trang thai moi
        return {
            status: status,
            sort : {
                by: by,
                value: value
            }
        }
    }
    return state;
}
 
const store = createStore(myReduce);
console.log(store)
console.log('Default state:', store.getState())


//thuc hien thay doi status
var action = {
    type: 'TOGGLE_STATUS'
}
store.dispatch(action);
console.log('Toogle status: ', store.getState())



//thuc hien cong viec sap xep ten tu z-> a
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value : -1
    }
}
store.dispatch(sortAction);

console.log('sort: ', store.getState())
