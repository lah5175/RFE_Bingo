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
    if (this.props.loggedIn) {
      return (
        <Route path="/" component={Main} />
      )
    }
    else {
      return (
        <Route path="/" component={AuthScreen} />
      )
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
})

export default connect(mapStateToProps)(Routes);