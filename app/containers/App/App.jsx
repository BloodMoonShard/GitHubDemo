import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import Login from 'containers/Login';

const App = ({ history }) => (
  <div style={{ fontSize: '14px' }}>
    <Switch>
      <Route
        exact
        path="/"
        component={HomePage}
      />
      <Route
        path="/login"
        component={Login}
      />
    </Switch>
  </div>
);

export default App;
