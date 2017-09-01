import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_USER_BOARDS = 'RECEIVE_USER_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//action creators
export const receiveUserBoards = (boards) => ({
  type: RECEIVE_USER_BOARDS,
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
export const requestUserBoards = (userId) => dispatch => {
  return (BoardAPIUtil.fetchUserBoards(userId)
    .then(boards => dispatch(receiveUserBoards(boards)
  ))
  );
};

export const requestSingleBoard = (id) => dispatch => {
  return (BoardAPIUtil.fetchSingleBoard(id)
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

export const createBoard = (board) => dispatch => {
  return (BoardAPIUtil.createBoard(board)
    .then(board => dispatch(receiveSingleBoard(board)
  ))
  );
};
