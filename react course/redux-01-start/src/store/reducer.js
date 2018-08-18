import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import resultReducer from "./reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

export default rootReducer;

// import * as actionTypes from "./actions/actionTypes";

// const initialState = {
//   counter: 0,
//   results: []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1
//       };
//     case actionTypes.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter - 1
//       };
//     case actionTypes.ADD:
//       return {
//         ...state,
//         counter: state.counter + action.value
//       };
//     case actionTypes.SUBTRACT:
//       return {
//         ...state,
//         counter: state.counter - action.val
//       };
//     case actionTypes.STORE_RESULT:
//       return {
//         ...state,
//         results: state.results.concat({ id: new Date(), val: state.counter })
//       };
//     case actionTypes.DELETE_RESULT:
//       // const id = 2;
//       // const newArr = [...this.state.results];
//       // newArr.slice(id, 1)
//       // return {
//       //   ...state,
//       //   results: newArr
//       // };
//       const updatedArray = state.results.filter(
//         result => result.id !== action.resultElId
//       );
//       return {
//         ...state,
//         results: updatedArray
//       };
//   }
//   return state;
// };
