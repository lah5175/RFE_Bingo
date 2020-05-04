import React from 'react'
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom'
import AuthScreen from './components/auth-screen';
import Main from './components/Main';

class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={AuthScreen} />
        {
          this.props.loggedIn &&
          <Route path="/board" component={Main} />
        }
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
})

export default connect(mapStateToProps)(Routes);