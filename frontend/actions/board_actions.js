
import * as BoardAPIUtil from '../util/board_api_util';
import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER_BOARDS = 'RECEIVE_USER_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
//action creators
export const receiveUserBoards = (boards) => ({
  type: RECEIVE_USER_BOARDS,
  boards
});
window.receiveUserBoards = receiveUserBoards;

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
export const requestUserBoards = (userId) => dispatch => {
  return (UserAPIUtil.fetchUserBoards(userId)
    .then(boards => dispatch(receiveUserBoards(boards)
  ))
  );
};
window.requestUserBoards = requestUserBoards;

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

export const createBoard = (board) => dispatch => {
  return (BoardAPIUtil.createBoard(board)
    .then(board => dispatch(receiveSingleBoard(board)
  ))
  );
};
window.createBoard = createBoard;
