// Session Actions

import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const USER_LOG_OUT = 'USER_LOG_OUT';
// export const RECEIVE_USER = 'RECEIVE_USER';
export const CLEAR_SESSION_ERRORS = 'CLEAR_ERRORS';

//action creator
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

// export const receiveUser = user => ({
//     type: RECEIVE_USER,
//     user
// });

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

//receives an array of errors
export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveLogOut = () => ({
  type: USER_LOG_OUT
});

// thunk action
export const login = user => dispatch => {
  return (sessionAPIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    )));
};

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSessionErrors(err.responseJSON))
  ))
);

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
