import * as searchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RESET_SEARCH = 'REST_SEARCH';

//action
export const receiveSearch = (search) => ({
  type: RECEIVE_SEARCH,
  search
});

export const resetSearch = () => {
  type: RESET_SEARCH
}

//thunk
export const requestSearch = (search) => dispatch => {
  return (
    searchAPIUtil.fetchSearch(search)
    .then( search => receiveSearch(search)));
};
