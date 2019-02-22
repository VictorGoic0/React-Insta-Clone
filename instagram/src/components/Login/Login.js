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
        <form>
          <input type="text" value={this.state.userText} name="userText" onChange={this.handleChanges}>
          </input>
        </form>
        <h3>Password: </h3>
        <form>
          <input type="text" value={this.state.passText} name="passText" onChange={this.handleChanges}>
          </input>
        </form>
        <button onClick={this.signIn}>Sign In</button>
      </div>
    )
  }
}

export default Login;
