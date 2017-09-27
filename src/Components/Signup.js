import React, {Component} from 'react';
import '../styles/App.css';

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username : '',
      email: '',
      password: '',
      error: ''
    }
  }
  updateSignup(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }
  signup(event) {

    event.preventDefault();
    request
      .post("https://desolate-harbor-53073.herokuapp.com/api/users/signup/")
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
      <div>
        <form >
          <h2> Sign up for a free Account </h2>
          <label htmlFor="display-name">Display Name: </label>
          <input type="text" className="form-control input-default" id="display-name" placeholder="Display Name" />
          <label htmlFor="email">Email: </label>
          <input type="text" className="form-control input-default" id="email" placeholder="Email" onChange={this.updateLogin('email')} value={this.state.email} />
          <label htmlFor="password">Password: </label>
          <input type="text" className="form-control input-default" id="password" placeholder="Password" onChange={this.updateLogin('password')}
                        value={this.state.password}/>
          <input className="btn btn-primary btn-lg" type="submit" value="signup" onClick={event => this.signup(event)}/>
        </form>
      </div>

    )
  }
}
