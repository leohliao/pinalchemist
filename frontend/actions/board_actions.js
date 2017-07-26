import * as BoardAPIUtil from '../util/board_api_util';

export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';
export const RECEIVE_SINGLE_BOARD = 'RECEIVE_SINGLE_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';

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
