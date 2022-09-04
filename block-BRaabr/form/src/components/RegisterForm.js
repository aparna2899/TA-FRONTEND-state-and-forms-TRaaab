import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      password2: '',
      errors: {
        username: '',
        password: '',
        email: '',
        password2: '',
      },
    };
  }
  validateEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'username':
        errors.username =
          value.length < 3 ? 'Username must be atleast 3 characters' : '';
        break;
      case 'password':
        errors.password =
          value.length < 6 ? 'Password must be atleast 6 characters' : '';
        break;
      case 'password2':
        errors.password2 = value === '' ? 'Confirm Password is required' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = () => {
    alert(`Registeration succesful of ${this.state.username}`);
  };

  render() {
    let { username, email, password, password2 } = this.state.errors;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1 className="center">Register With Us</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          ></input>
          <span>{username}</span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          ></input>
          <span>{email}</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          ></input>
          <span>{password}</span>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            placeholder="Enter password again"
            id="password2"
            name="password2"
            value={this.state.password2}
            onChange={this.handleInput}
          ></input>
          <span>{password2}</span>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Register;
