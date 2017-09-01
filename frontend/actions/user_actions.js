import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';
//action creator
export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
})

export const clearUserError = () => ({
  type: CLEAR_USER_ERRORS
})

//thunk action
export const requestSingleUser = (userId) => dispatch => {
  return  (userAPIUtil.fetchSingleUser(userId)
    .then (user => dispatch(receiveSingleUser(user)
  )), error => (
      dispatch(receiveUserErrors(error.responseJSON))
    )
  );
};
