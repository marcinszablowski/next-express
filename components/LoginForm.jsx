import React, {Component} from 'react';
import loginUser from '../lib/auth';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    const {email, password} = this.state;

    e.preventDefault();
    loginUser(email, password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;