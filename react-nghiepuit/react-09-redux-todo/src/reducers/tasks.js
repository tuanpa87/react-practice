import * as types from './../constants/ActionTypes' //import lai danh sach action duoi dang hang so

var data = JSON.parse(localStorage.getItem('tasks'))

//test
/*
var initialState = [ 

// {
//     id: '1',
//     name: 'hocj react',
//     status: true
// }
];
*/

var id = '';
var index = -1;
var initialState = (data) ? data : []

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state

        case types.SAVE_TASK:
            console.log(action);
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }

            if(!task.id) { //thêm task: task.id không có
                task.id = generateID() ;
                state.push(task);
            } else { //sửa task
                index = findIndex(state ,task.id)
                state[index] = task
            }

            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state] //tranh tham chieu bo nho

        case types.UPDATE_STATUS:
            id = action.id
            index = findIndex(state ,id)
            console.log(index)
            //ko cap nhat duoc view
            //state[index].status =! state[index].status

            state[index] = {
                ...state[index],
                status: !state[index].status
            }

            localStorage.setItem('tasks', JSON.stringify(state));;
            return [...state]

        case types.DELETE_TASK:
            id = action.id
            index = findIndex(state ,id)
            state.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(state));;
            return [...state]

        default: return state;
    }
}


var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + s4() + '-' + s4() + s4() + s4() + s4() + s4() + s4()
}

var findIndex = (tasks ,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    })
    return result
}

export default myReducers