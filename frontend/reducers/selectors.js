import { values } from 'lodash';

export const selectAllPins = (state) => values(state.pins.pins);

export const selectAllBoards = ({ boards }) => values(boards);
window.selectAllBoards = selectAllBoards;

export const selectBoardPins = ({boards}, board) => {
  debugger;
  return board ?
    boards.id.map (id => boards[id].pin_ids) : [];
}
window.selectBoardPins = selectBoardPins;
