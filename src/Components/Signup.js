import React, {Component} from 'react';
import '../styles/App.css';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <form >
          <h4> Sign up for a free Account </h4>
          <label htmlFor="display-name">Display Name: </label>
          <input type="text" className="form-control input-default" id="display-name" placeholder="Display Name" />
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
