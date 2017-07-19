// rootReducer

// Create a new file, reducers/root_reducer.js. This file will be responsible for combining our multiple, domain-specific reducers. It will export a single rootReducer.

// Import combineReducers from the redux library.
// Also import the SessionReducer function we just created!
// Create a rootReducer using the combineReducers function.
// Remember, the combineReducers function accepts a single argument: an object whose properties will represent properties of our application state, and values that correspond to domain-specific reducing functions.
// export default rootReducer.

import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
    session: SessionReducer
});

export default rootReducer;

///output should be like this:
// {
//   session: {
//     currentUser: null,
//     errors: []
//   }
// }