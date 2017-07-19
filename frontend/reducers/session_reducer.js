// Create a new reducer in a new file reducers/session_reducer.js to keep track of our current user and error messages.
// The SessionReducer should listen for 2 action types and respond to each like so:

// RECEIVE_CURRENT_USER - sets currentUser to the action's user and clears errors
// RECEIVE_ERRORS - sets errors to the action's errors and clears the currentUser
// Your SessionReducer should maintain its own default state. To do that pass in an object as a default argument to SessionReducer with currentUser set to null and errors set to an empty array.

// Remember to use both Object.freeze() and Object.assign or lodash/merge to prevent the state from being accidentally mutated.

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash/merge';

const defaultState = Object.freeze({
    currentUser: null,
    errors: []
});

const SessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_CURRENT_USER:
          debugger;
            const currentUser = action.user;
            return merge({}, state, {currentUser} );

        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, defaultState, {errors});
        default:
            return state;
    } //switch
}; //Session_reducer

/// in receive_current_user, why do we merge with nullUser instead of state? (sourcing from the solution)

export default SessionReducer;
