import * as boardActions from '../actions/board_actions';
import merge from 'lodash/merge';
//
// const defaultState = Object.freeze({
//   boards: {},
//   errors: []
// });

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){

    case boardActions.RECEIVE_USER_BOARDS:
      const boards = action.boards;
      return boards;

    case boardActions.RECEIVE_SINGLE_BOARD:
      const board = action.board;
      const boardID = action.board.id;
      return merge ({}, state, { [boardID]: board });

    case boardActions.DELETE_BOARD:
      const newState = merge({}, state);
      delete newState[action.board.id];
      return newState;

    default:
      return state;
  }//end switch
};//end BoardReducer

export default BoardReducer;
