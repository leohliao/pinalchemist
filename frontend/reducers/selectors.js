import { values } from 'lodash';

export const selectAllPins = ({ pins }) => values(pins.pins);

export const selectAllBoards = ({ boards }) => values(boards);
window.selectAllBoards = selectAllBoards;
