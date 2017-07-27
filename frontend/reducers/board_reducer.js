import * as boardActions from '../actions/board_actions';
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  boards: {},
  errors: []
});

const BoardReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type){

    case boardActions.RECEIVE_ALL_BOARDS:
      const boards = action.boards;
      return merge({}, state, { boards } );

    case boardActions.RECEIVE_SINGLE_BOARD:
      const board = action.board;
      const boardID = action.board.id;
      return merge ({}, state, { boards: { [boardID]: board }});

    case boardActions.DELETE_BOARD:
      const newState = merge({}, state);
      delete newState.boards[action.board.id];
      return newState;

    case boardActions.RECEIVE_BOARD_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });

    case boardActions.CLEAR_ERRORS:
      return merge({}, defaultState, {errors: [] });

    default:
      return state;
  }//end switch
};//end BoardReducer

export default BoardReducer;
