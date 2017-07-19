import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={ SessionFormContainer } />
      <Route exact path="/signup" component={ SessionFormContainer } />
    </Switch>
  </div>
);

export default App;
