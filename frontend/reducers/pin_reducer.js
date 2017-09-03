import * as pinActions from '../actions/pin_actions';
import merge from 'lodash/merge';
// import { RECEIVE_ALL_PINS } from '../actions/pin_actions';
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
      const pinId = action.pin.id;
      return merge({}, state, { pins: {[pinId]: pin }});

    case pinActions.REMOVE_PIN:
      const newState = merge({}, state);
      delete newState.pins[action.pin.id];
      return newState;

    case pinActions.RECEIVE_PIN_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, { errors } );

    case pinActions.CLEAR_PIN_ERRORS:
      return merge({}, defaultState, {errors: []} );

    default:
      return state;
  }//switch
};//PinReducer

export default PinReducer;
