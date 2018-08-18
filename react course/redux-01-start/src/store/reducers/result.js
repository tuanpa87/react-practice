import * as actionTypes from "../actions/actionTypes";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      //change data here
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArr = [...this.state.results];
      // newArr.slice(id, 1)
      // return {
      //   ...state,
      //   results: newArr
      // };
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};

export default reducer;
