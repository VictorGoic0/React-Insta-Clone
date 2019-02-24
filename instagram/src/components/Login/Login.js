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
      <div className="login">
        <img src="/Images/iglogo.png" alt="Instagram" />
        <form onSubmit={this.signIn}>
          <input type="text" value={this.state.userText} name="userText" onChange={this.handleChanges} placeholder="Username">
          </input>
          <input type="text" value={this.state.passText} name="passText" onChange={this.handleChanges} placeholder="Password">
          </input>
          <button>Sign In</button>
        </form>
        <h3>Forgot Password?</h3>
      </div>
    )
  }
}

export default Login;
