import React, {Component} from 'react';
import '../styles/App.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <form >
          <h4> Login </h4>
          <label htmlFor="email">Email: </label>
          <input type="text" className="form-control input-default" id="email" placeholder="Email" />
          <label htmlFor="password">Password: </label>
          <input type="text" className="form-control input-default" id="password" placeholder="Password" />
          <input className="btn btn-primary btn-lg" type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}
