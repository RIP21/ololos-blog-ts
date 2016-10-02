import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  function actionTypeEndsWithSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
  }

  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsWithSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
