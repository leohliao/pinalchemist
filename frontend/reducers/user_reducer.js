import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER, RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from '../actions/user_actions';

const defaultState = () => ({
  user: [],
  errors: []
})

const userReducer = (state = defaultState, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      return merge({}, action.user);

    case RECEIVE_USER_ERRORS:
      return merge({}, state, {errors: [...action.errors]});

    case CLEAR_USER_ERRORS:
    return merge({}, defaultState, {errors: []} );

    default:
      return state;
  }
};

export default userReducer;
