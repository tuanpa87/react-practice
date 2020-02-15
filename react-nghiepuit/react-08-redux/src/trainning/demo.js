import { createStore } from 'redux';
import {status, sort } from './actions/index'
import myReducer from './reducers'

const store = createStore(myReducer); //truyen reducer vao store
console.log(store)
console.log('Default state:', store.getState())
// luu y: khi mo object thi cac gia tri ben trong da duoc cap nhat sang trang thai moi
//chac do cung vung nho

//thuc hien thay doi status
store.dispatch(status());
console.log('Toogle status: ', store.getState())


//thuc hien cong viec sap xep ten tu z-> a
store.dispatch(sort({
    by: 'name',
    value: -1
}));
console.log('sort: ', store.getState())

