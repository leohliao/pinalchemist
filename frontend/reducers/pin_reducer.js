import * as pinActions from '../actions/pin_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  pins: {},
  errors: []
});

const PinReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {

    case pinActions.RECEIVE_ALL_PINS:
      const pins = action.pins;
      return merge({}, state, { pins } );

    case pinActions.RECEIVE_SINGLE_PIN:
      const pin = action.pin;
      return merge({}, state, { pin });

    case pinActions.RECEIVE_PIN_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors } );

    case pinActions.CLEAR_ERRORS:
      return merge({}, defaultState, {errors: []} );

    default:
      return state;
  }//switch
};//PinReducer
