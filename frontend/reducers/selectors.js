import { values } from 'lodash';

export const selectAllPins = ({ pins }) => values(pins.pins);
