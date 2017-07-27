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
window.receiveAllBoards = receiveAllBoards;

export const receiveSingleBoard = (board) => ({
  type: RECEIVE_SINGLE_BOARD,
  board
});
window.receiveSingleBoard = receiveSingleBoard;

export const deleteBoard = (board) => ({
  type: DELETE_BOARD,
  board
});
window.deleteBoard = deleteBoard;

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
window.requestAllBoards = requestAllBoards;

export const requestSingleBoard = (id) => dispatch => {
  return (BoardAPIUtil.fetchSingleBoard(id)
    .then(board => dispatch(receiveSingleBoard(board)
  ))
  );
};
window.requestSingleBoard = requestSingleBoard;

export const removeBoard = (id) => dispatch => {
  return (BoardAPIUtil.deleteBoard(id)
    .then(board => dispatch(deleteBoard(board)
  ))
  );
};
window.removeBoard = removeBoard;
