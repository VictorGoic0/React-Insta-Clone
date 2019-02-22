import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userText: '',
      passText: ''
    }
  }

  signIn = e => {
    e.preventDefault();
    localStorage.setItem(this.state.userText, this.state.passText);
    window.location.reload();
  }

  handleChanges = e => {
    console.log(this.state)

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="Login">
        <h2>Login</h2>
        <h3>Username: </h3>
        <form onSubmit={this.signIn}>
          <input type="text" value={this.state.userText} name="userText" onChange={this.handleChanges}>
          </input>
        <h3>Password: </h3>
          <input type="text" value={this.state.passText} name="passText" onChange={this.handleChanges}>
          </input>
          <button>Sign In</button>
        </form>
      </div>
    )
  }
}

export default Login;
