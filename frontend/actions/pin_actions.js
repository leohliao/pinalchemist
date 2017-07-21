import * as pinAPIUtil from '../util/pin_actions.js';

const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";
const RECEIVE_PINS = "RECEIVE_PINS";
const DELETE_PIN = "DELETE_PIN";


//action creators
export const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

export const receiveSinglePin = pin => ({
  type: RECEIVE_SINGLE_PIN,
  pin
});

export const deletePin = (id) => ({
  type: DELETE_PIN,
  id
});

//thunk Actions
export const requestAllPins = () => dispatch => {
  return (pinAPIUtil.fetchAllPins()
    .then(pins => dispatch(receivePins(pins)
  ))
  );
};

export const requestSinglePin = (id) => dispatch => {
  return (pinAPIUtil.fetchSinglePins(id)
    .then(pin => dispatch(receiveSinglePin(pin)
  ))
  );
};
