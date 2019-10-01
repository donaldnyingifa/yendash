import React from 'react';
import SignIn from './Components/signin'
import Register from './Components/register'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Admin from './Components/adminDashboard/Admin';
import Header from './Components/Header/Header'
import registeredSchool from './Components/adminDashboard/registeredSchool';
import dashboard from './Components/userDashboard/dashboard'
import student from './Components/userDashboard/Student'
import Profile from './Components/Profile/Profile'
import SchoolData from './Components/adminDashboard/data'
import Home from './Components/Home';

const Routes = (props) => {
  return (
    <Router>
     
      <Switch>
        <Route exact component={Home} path="/" />
        <Route  exact component={SignIn} path="/signin"/>
        <Route  exact component={Register} path="/register"/>
        <Header>
        <Route exact component={dashboard} path="/new/schools" />
        <Route exact component={registeredSchool} path="/schools" />
        <Route exact component={SchoolData} path="/schools/:id"/>
        <Route exact component={Admin} path="/dashboard" />
        <Route exact component={student} path='/student' />
        <Route exact component={Profile} path='/profile'/>
        </Header>
      </Switch>

    </Router>

  )
}

export default Routes;
