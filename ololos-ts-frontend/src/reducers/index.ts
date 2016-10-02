import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');

const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
