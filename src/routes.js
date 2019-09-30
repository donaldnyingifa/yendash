import React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import SignIn from './Components/signin'
import Register from './Components/register'

const Routes = (props) => {
  return(
    <Router>
      <Switch>
          <Route  exact component={SignIn} path="/signin"/>
          <Route  exact component={Register} path="/register"/>
        </Switch>
    </Router>
       
  )
}

export default Routes;
