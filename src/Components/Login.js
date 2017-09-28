import React, {Component} from 'react';
import '../styles/App.css';
import Layout from '../Components/Layout.js';
import request from 'superagent';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      token: '',
      error: ''
    }
  }
    updateLogin(stateKey) {
      return (event) => {
        this.setState({[stateKey]: event.target.value});
      }
    }

    login(event) {
      let setToken =this.props.setToken;

      event.preventDefault();
        request
          .post("https://serene-waters-86956.herokuapp.com/posts/")
          .send({email: this.state.email, password: this.state.password})
          .end((err, res) => {
            if (err) {
              this.setState({error: res.body.error});
            } else {
              setToken(res.body.token);
            }
          })
        }

  render() {
    return (
      <div className="userLogin">
      {this.state.error && <div className="alert">{this.state.error}</div>}
        <form >
          <h2> Login </h2>
          <label htmlFor="email">Email: </label>
          <input type="email" className="form-control input-default" id="email" placeholder="Email" onChange={this.updateLogin('email')} value={this.state.email}/>
          <label htmlFor="password">Password: </label>
          <input type="password" className="form-control input-default" id="password" placeholder="Password" onChange={this.updateLogin('password')}
                        value={this.state.password}/>
          <input className="btn btn-primary btn-lg" type="submit" value="Login" onClick={event => this.login(event)}/>
        </form>
      </div>
    )
  }
}
