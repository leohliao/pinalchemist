import * as searchActions from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case searchActions.RECEIVE_SEARCH:
      return merge({}, action.search);
    case searchActions.RESET_SEARCH:
      return {};
    default:
    return state;
  }// end switch
} // end SearchReducer

export default SearchReducer;
