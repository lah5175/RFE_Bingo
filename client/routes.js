import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import AuthScreen from './components/auth-screen';

const Routes = props => {
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route path="/" component={AuthScreen} />
    </Switch>
  )
}

export default Routes;