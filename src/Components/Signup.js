import React, {Component} from 'react';
import '../styles/App.css';
import Layout from '../Components/Layout.js'
import request from 'superagent';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Redirect} from 'react-router';


export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username : '',
      email: '',
      password: '',
      error: '',
      redirect: false
    }
    this.updateSignup = this.updateSignup.bind(this);
  }
  updateSignup(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }
  signup(event) {
console.log(this.state);
  let {redirect} = this.state;
  let newUser = ({user: {username: this.state.username, email: this.state.email, password: this.state.password }});
  console.log(newUser);
    event.preventDefault();
    request
      .post("https://serene-waters-86956.herokuapp.com/users/")
      .send(newUser)
      .end((err, res) => {
        if (err) {
          this.setState({error: res.body.error});
        } else {
          this.setState({token: res.body.token});
        }
        console.log(this.state.token);

      })
  }

  render() {
    return (
      <div>
        {this.state.error && <div className="alert">{this.state.error}</div>}
        <form >
          <h2> Sign up for a free Account </h2>
          <label htmlFor="display-name">Display Name: </label>
          <input type="text" className="form-control input-default" id="username" placeholder="Display Name" onChange={this.updateSignup('username')} value={this.state.username}/>
          <label htmlFor="email">Email: </label>
          <input type="text" className="form-control input-default" id="email" placeholder="Email" onChange={this.updateSignup('email')} value={this.state.email} />
          <label htmlFor="password">Password: </label>
          <input type="password" className="form-control input-default" id="password" placeholder="Password" onChange={this.updateSignup('password')}
                        value={this.state.password}/>
          <input className="btn btn-primary btn-lg" type="submit" value="signup" onClick={event => this.signup(event)}/>
        </form>
        <p> Already have an Account? <Link to="/login">Log In</Link></p>

      </div>

    )
  }
}
