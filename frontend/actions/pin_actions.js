import * as pinAPIUtil from '../util/pin_api_util';

export const RECEIVE_SINGLE_PIN = "RECEIVE_SINGLE_PIN";
export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_PIN_ERRORS = "CLEAR_PIN_ERRORS";

//action creators
export const receiveAllPins = (pins) => ({
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
    type: CLEAR_PIN_ERRORS
});

//thunk Actions
export const requestAllPins = () => dispatch => {
  return (pinAPIUtil.fetchAllPins()
    .then(pins => dispatch(receiveAllPins(pins)
  ))
  );
};

export const requestSinglePin = (id) => dispatch => {
  return (pinAPIUtil.fetchSinglePin(id)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};

export const createPin = (pin) => dispatch => {
  return (pinAPIUtil.createPin(pin)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};

export const editPin = (pin) => dispatch => {
  return(pinAPIUtil.updatePin(pin)
    .then(pin => dispatch(receiveSinglePin(pin)
  )), error => (
    dispatch(receivePinErrors(error.responseJSON))
  )
  );
};

export const deletePin = (id) => dispatch => {
  return (pinAPIUtil.deletePin(id)
    .then(pin => dispatch(removePin(pin)
  ))
  );
};
