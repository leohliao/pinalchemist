import * as pinningAPIUtil from '../util/pinning_api_util';

import { receiveSingleBoard } from './board_actions';
import { receiveSinglePin } from './pin_actions';

//thunk actions
export const createPinning = (pinning) => (dispatch) => {
  return (pinningAPIUtil.createPinning(pinning)
  .then(pin => dispatch(receiveSinglePin(pin)))
  );
};
window.createPinning = createPinning;

export const deletePinning = (pinning) => (dispatch) => {
  return (pinningAPIUtil.deletePinning(pinning)
    .then(board => dispatch(receiveSingleBoard(board.pin.board)))
  );
};
window.deletePinning = deletePinning;
