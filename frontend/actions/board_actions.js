import * as BoardAPIUtil from '../util/board_api_util';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
//action creators
export const receiveAllBoards = (boards) => ({
  type: RECEIVE_ALL_BOARDS,
  boards
});

export const receiveSingleBoard = (board) => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});

export const deleteBoard = (board) => ({
  type: DELETE_BOARD,
  board
});

export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearBoardErrors = () => ({
  type: CLEAR_ERRORS
});

//thunk actions
export const requestAllBoards = () => dispatch => {
  return (BoardAPIUtil.fetchAllBoards()
    .then(boards => dispatch(receiveAllBoards(boards)
  ))
  );
};

export const requestSingleBoard = () => dispatch => {
  return (BoardAPIUtil.fetchSingleBoard()
    .then(board => dispatch(receiveSingleBoard(board)
  ))
  );
};

export const removeBoard = (id) => dispatch => {
  return (BoardAPIUtil.deleteBoard(id)
    .then(board => dispatch(deleteBoard(board)
  ))
  );
};
