import React from 'react';
import NavBarFormContainer from './navbar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => {

return (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={NavBarFormContainer} />
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
