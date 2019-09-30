import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Components/signin'
import Admin from './Components/adminDashboard/Admin';
import Header from './Components/Header/Header'
import registeredSchool from './Components/adminDashboard/registeredSchool';
import dashboard from './Components/userDashboard/dashboard'
import Profile from './Components/Profile/Profile';

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={SignIn} path="/" />
        <Route exact component={Admin} path="/admin" />
        <Route exact component={registeredSchool} path="/schools" />
        <Route exact component={dashboard} path="/dashboard"/>
        <Route exact component={Profile} path="/profile"/>
      </Switch>
    </Router>

  )
}

export default Routes;
