import burderBuilderReducer from "./burgerBuilder";
import orderReducer from "./order";
import authReducer from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  burgerBuilder: burderBuilderReducer,
  order: orderReducer,
  auth: authReducer
});

export default rootReducer;
