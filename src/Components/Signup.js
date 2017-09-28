import React, {Component} from 'react';
import '../styles/App.css';
import Layout from '../Components/Layout.js'
import request from 'superagent';
import {Link} from 'react-router-dom';



export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username : '',
      email: '',
      password: '',
      error: ''
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
  let newUser = ({user: {username: this.state.username, email: this.state.email, password: this.state.password }});
  console.log(newUser);
    event.preventDefault();
    request
      .post("https://serene-waters-86956.herokuapp.com/users/")
      .send(newUser)
      .end((err, res) => {
        if (err) {
          console.log("error");
        } else {
          console.log("success");;
        }

      })
  }

  render() {
    return (
      <div>
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
