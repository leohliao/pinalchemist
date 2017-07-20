// Session Actions

import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const USER_LOG_OUT = 'USER_LOG_OUT';
export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// thunk action
export const login = user => dispatch => {
  return (sessionAPIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    )));
};

//test
window.login = login;

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
///test
window.signup = signup;

//logout won't take an argument, upon success dispatch
//receiveCurrentUser(null) to remove the currentUser
export const logout = () => dispatch => {
 return (
  sessionAPIUtil.logout()
  .then(() => (
    dispatch(receiveCurrentUser(null))
  ))
);
};
///test
window.logout = logout;

//action creator
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});
window.clearErrors = clearErrors;

//receives an array of errors
export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const receiveLogOut = () => ({
  type: USER_LOG_OUT
});
