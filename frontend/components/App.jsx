import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => {

return (
  <div>
    <Switch>
      <ProtectedRoute exact path="/" component={GreetingContainer} />
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
