import React from 'react';
import {connect} from 'react-redux';
import {logIn} from '../store';

class AuthScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.password);
    this.setState({password: ''});
    this.props.history.push('/board');
  }

  render() {
    return (
      <div id="auth-screen-container">
        <div className="background-img" />

        <div id="auth-screen-foreground">
          <h1>Welcome to RFE Bingo!</h1>
          <h2>Please enter the password to get started.</h2>

          <form id="auth-form" onSubmit={this.handleSubmit}>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>

          <p>
            Please note that this site is only for RFE raid members at this time as the database is currently
            very limited on space. Sorry!
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user
})

const mapDispatchToProps = dispatch => ({
  logIn: password => dispatch(logIn(password))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);