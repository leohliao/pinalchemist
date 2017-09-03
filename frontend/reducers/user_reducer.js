import merge from 'lodash/merge';
import { RECEIVE_SINGLE_USER, RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from '../actions/user_actions';

const defaultState = () => ({
  user: [],
  errors: []
})

const UserReducer = (state = defaultState, action) => {

  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_USER:
      const user = action.user
      return merge({}, { user } );

    case RECEIVE_USER_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case CLEAR_USER_ERRORS:
      return merge({}, defaultState, {errors: []} );

    default:
      return state;
  }
};

export default UserReducer;
