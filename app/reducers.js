/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { USER_LOGGING_IN, USER_LOGGED_IN, USER_LOGGED_OUT, USER_LOADING } from './constants';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */


/**
 * Merge route into the global application state
 */
function routeReducer(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialUser = {
  userId: localStorage.getItem('userId') || null,
  id: localStorage.getItem('token') || null,
};

function userReducer(state = initialUser, action) {
  switch (action.type) {
    case USER_LOGGING_IN:
      return { ...initialUser };
    case USER_LOGGED_IN:
      localStorage.setItem('token', action.payload.id);
      localStorage.setItem('userId', action.payload.userId);
      return { ...action.payload };
    case USER_LOGGED_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      window.location.href = '/login';
      return {
        userId: null,
        id: null,
      };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    user: userReducer,
    form: formReducer,
    ...injectedReducers,
  });
}
