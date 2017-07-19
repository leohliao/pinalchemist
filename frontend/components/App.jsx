import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (

  <div>

    <header>
      <Link to="/" className="header-link" />
      <GreetingContainer />
    </header>

    <Switch>
    <AuthRoute exact path="/login" component={ SessionFormContainer } />
    <AuthRoute exact path="/signup" component={ SessionFormContainer } />
    </Switch>

  </div>
);

export default App;
