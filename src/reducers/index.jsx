import { routerReducer } from 'react-router-redux';
import { withReduxStateSync } from 'redux-state-sync';
import { combineReducers } from "redux";
import employeesReducer from "./employees";

const allReducers = combineReducers({
  employeesReducer: employeesReducer,
  routerReducer: routerReducer
})
const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  /*if (action.type === 'USER_LOGGED_OUT') {
    //localStorage.removeItem('user')
    state = undefined;
  }*/
  return allReducers(state, action);
};

//export default rootReducer;
export default withReduxStateSync(rootReducer);
//export default allReducers