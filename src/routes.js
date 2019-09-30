import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Components/signin'
import Admin from './Components/adminDashboard/Admin';
import Header from './Components/Header/Header'
import registeredSchool from './Components/adminDashboard/registeredSchool';

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={SignIn} path="/" />
        <Route exact component={Admin} path="/admin" />
        <Route exact component={registeredSchool} path="/schools" />
      </Switch>
    </Router>

  )
}

export default Routes;
