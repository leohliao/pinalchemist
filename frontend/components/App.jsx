import React from 'react';
import NavBarFormContainer from './navbar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import PinCreateContainer from './pin/pinCreate/pin_create_container';
import PinIndexContainer from './pin/pinIndex/pin_index_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {

return (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={NavBarFormContainer} />
      <ProtectedRoute exact path="/mylibrary/pin_create" component={PinCreateContainer} />
      <ProtectedRoute exact path="/index" component={PinIndexContainer} />
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
