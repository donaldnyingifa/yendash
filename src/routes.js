import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Components/signin'
import Admin from './Components/adminDashboard/Admin';

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact component={SignIn} path="/" />
        <Route exact component={Admin} path="/admin" />
      </Switch>
    </Router>

  )
}

export default Routes;
