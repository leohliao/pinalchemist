import React from 'react';
import NavBarFormContainer from './navbar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
// import PinCreateContainer from './pin/pinCreate/pin_create_container';
import PinIndexContainer from './pin/pinIndex/pin_index_container';
// import PinShowContainer from './pin/pinShow/pin_show_container';
import MyLibraryContainer from './myLibrary/my_library_container';
import BoardShowContainer from './board/boardShow/board_show_container';
import BoardIndexContainer from './board/boardIndex/board_index_container';
// import DiscoverIdeaContainer from './discover/discover_container';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

return (
  <div>
    <ProtectedRoute exact path="/" component={NavBarFormContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/:userId" component={MyLibraryContainer} />
      <ProtectedRoute path="/:userId/boards" component={BoardIndexContainer} />
      <ProtectedRoute path="/boards/:id" component={BoardShowContainer} />
      <ProtectedRoute path="/" component={PinIndexContainer} />
    </Switch>
  </div>
);
};

export default App;

// <Redirect from='/' to='/pins' />
// <Switch>
//   <ProtectedRoute exact path="/login" component={ SessionFormContainer } />
//   <ProtectedRoute exact path="/signup" component={ SessionFormContainer } />
// </Switch>
