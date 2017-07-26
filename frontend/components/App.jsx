import React from 'react';
import NavBarFormContainer from './navbar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import PinCreateContainer from './pin/pinCreate/pin_create_container';
import PinIndexContainer from './pin/pinIndex/pin_index_container';
import PinShowContainer from './pin/pinShow/pin_show_container';
import MyLibraryContainer from './myLibrary/my_library_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

return (
  <div>
    <ProtectedRoute exact path="/" component={NavBarFormContainer} />
    <Redirect from='/' to='/pins' />
    <Switch>
      <ProtectedRoute path="/pins" component={PinIndexContainer} />
      <ProtectedRoute path="/mylibrary" component={MyLibraryContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);
};

export default App;

// <Switch>
//   <ProtectedRoute exact path="/login" component={ SessionFormContainer } />
//   <ProtectedRoute exact path="/signup" component={ SessionFormContainer } />
// </Switch>
