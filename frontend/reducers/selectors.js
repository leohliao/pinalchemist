import { values } from 'lodash';

export const selectAllPins = (state) => values(state.pins.pins);

export const selectMyPins = (state) => values(state.session.currentUser.my_pins);

export const selectAllBoards = ({ boards }) => values(boards);

export const selectBoardPins = ({boards}, board) => {
  debugger;
  return board ?
    boards.id.map (id => boards[id].pin_ids) : [];
}

export const selectAllUsers = (state) => {
  return (values(state.users))
}

export const selectSingleUser = ({ users }, id) => {
  return users[id] || {};
};
