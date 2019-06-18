import { push } from 'react-router-redux';
import * as constants from './constants';
import * as api from './api';

export const loginSuccessful = (data) => (
  {
    type: constants.USER_LOGGED_IN,
    payload: data,
  }
);

export const loginUnSuccessful = (data) => (
  {
    type: constants.USER_LOGGED_OUT,
    payload: data,
  }
);

export const startLoading = () => (
  {
    type: 'LOADING',
    payload: true,
  }
);

export const stopLoading = () => (
  {
    type: 'LOADING',
    payload: false,
  }
);

export const login = data => {
  return async (dispatch) => {
    dispatch({
      type: 'LOADING',
      payload: true,
    });
    api.login(data)
      .then((data) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        });
        if (!data.error) {
          dispatch(loginSuccessful(data));
          return dispatch(push('/'));
        }
        return dispatch(loginUnSuccessful(data));
      })
      .catch(event => {
        debugger;
      });
  };
};

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT,
  };
}
