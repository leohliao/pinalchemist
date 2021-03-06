import { values } from 'lodash';

export const selectAllPins = (state) => values(state.pins.pins);

export const selectMyPins = (state) => values(state.session.currentUser.my_pins);

export const selectMyMasters = (state) => values (state.session.currentUser.masters)

export const selectMyDisciples = (state) => values (state.session.currentUser.disciples)

export const selectAllBoards = ({ boards }) => values(boards);

export const selectBoardPins = ({boards}, board) => {
  return board ?
    boards.id.map (id => boards[id].pin) : [];
}

export const selectAllUsers = (state) => {
  return (values(state.users))
}

export const selectSingleUser = ({ users }, id) => {
  return users[id] || {};
};
