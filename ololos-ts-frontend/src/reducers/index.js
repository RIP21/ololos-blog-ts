import {combineReducers} from 'redux';
import posts from './postReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  posts,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
