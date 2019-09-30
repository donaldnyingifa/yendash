import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './Components/signin'
import Header from './Components/Header/Header';

const Routes = (props) => {
  return(
    <Router>
      <Switch>
        <Route exact component={Header} path="/"/>
          <Route  exact component={SignIn} path="/"/>
        </Switch>
    </Router>
       
  )
}

export default Routes;
