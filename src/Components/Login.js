import React, {Component} from 'react';
import '../styles/App.css';
import Layout from '../Components/Layout.js';
import request from 'superagent';
import {Link} from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: this.props.token,
      error: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
    updateLogin(stateKey) {
      return (event) => {
        this.setState({[stateKey]: event.target.value});
      }
    }

    login(event) {
      let setToken = this.props.setToken;
      console.log(this.state.email, this.state.password);
      event.preventDefault();
        request
          .post("https://serene-waters-86956.herokuapp.com/users/login")
          .send({email: this.state.email, password: this.state.password})
          .end((err, res) => {
            if (err) {
              this.setState({error: res.body.error});
            } else {
              setToken(res.body.token, this.state.email);
            }
            console.log(this.state.token);
          })
        }

        handleFormSubmit(event){
          event.preventDefault()
          this.setState({email: event.target.value, password: event.target.password});
          let userLogin = JSON.stringify(this.state);
        }

  render() {
    return (
      <div className="userLogin">
      {this.state.error && <div className="alert">{this.state.error}</div>}
      <div>{this.state.token}</div>
        <form onSubmit={this.handleFormSubmit}>
          <h2> Login </h2>
          <label htmlFor="email">Email: </label>
          <input type="email" className="form-control input-default" id="email" placeholder="Email" onChange={this.updateLogin('email')} value={this.state.email}/>
          <label htmlFor="password">Password: </label>
          <input type="password" className="form-control input-default" id="password" placeholder="Password" onChange={this.updateLogin('password')}
                        value={this.state.password}/>
          <input className="btn btn-primary btn-lg" type="submit" value="Login" onClick={event => this.login(event)}/>
        </form>
        <p> Don&#39;t have an Account? <Link to="/signup">Sign Up</Link></p>

      </div>
    )
  }
}
