// Session Actions

import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


// thunk action
export const login = user => dispatch => (
  sessionAPIUtil.login(user)
    .then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
);

export const signup = user => dispatch => (
  sessionAPIUtil.signup(user)
  .then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

//logout won't take an argument, upon success dispatch
//receiveCurrentUser(null) to remove the currentUser
export const logout = () => dispatch => (
  sessionAPIUtil.logout()
  .then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

//action creator
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

//receives an array of errors
export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

/////////
