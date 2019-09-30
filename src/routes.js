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
import schoolData from './Components/adminDashboard/data'

const Routes = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route  exact component={SignIn} path="/signin"/>
        <Route  exact component={Register} path="/register"/>

        <Route exact component={Admin} path="/admin" />
        <Route exact component={registeredSchool} path="/schools" />
        <Route exact component={schoolData} path="/schools/data"/>
        <Route exact component={dashboard} path="/" />
        <Route exact component={student} path='/student' />
        <Route exact component={Profile} path='/profile'/>
      </Switch>

    </Router>

  )
}

export default Routes;
