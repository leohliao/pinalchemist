import * as pinAPIUtil from '../util/pin_api_util';

const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";
const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
const REMOVE_PIN = "REMOVE_PIN";
const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
const CLEAR_ERRORS = "CLEAR_ERRORS";

//action creators
export const receivePins = (pins) => ({
  type: RECEIVE_ALL_PINS,
  pins
});

export const receiveSinglePin = (pin) => ({
  type: RECEIVE_SINGLE_PIN,
  pin
});

export const removePin = (pin) => ({
  type: REMOVE_PIN,
  pin
});

export const receivePinErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

//thunk Actions
export const requestAllPins = () => dispatch => {
  return (pinAPIUtil.fetchAllPins()
    .then(pins => dispatch(receivePins(pins)
  ))
  );
};
window.requestAllPins = requestAllPins;

export const requestSinglePin = (id) => dispatch => {
  return (pinAPIUtil.fetchSinglePins(id)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};
window.requestSinglePin = requestSinglePin;

export const createPin = (pin) => dispatch => {
  return (pinAPIUtil.createPin(pin)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};
window.createPin = createPin;

export const editPin = (pin) => dispatch => {
  return(pinAPIUtil.updatePin(pin)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};
window.editPin = editPin;

export const deletePin = (id) => dispatch => {
  return (pinAPIUtil.deletePin(id)
    .then(pin => dispatch(removePin(pin)
  ))
  );
};
window.deletePin = deletePin;
