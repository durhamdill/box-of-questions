import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';
import cookie from 'react-cookies';
import request from 'superagent';
import Login from '../Components/Login.js';
import Signup from '../Components/Signup.js';


export default class BaseLayout extends Component {
  constructor(props) {
      super(props);
      this.state = {
        
      }
    }

    componentWillMount() {
      this.setState({
        token: cookie.load('token'),
        username: cookie.load('username')
      });
      console.log(cookie);
    }

    setToken(token, username) {
      this.setState({
        token: token,
        username: username
      });
      console.log(this.state.username);
      cookie.save('token', token);
      cookie.save('username', username);
    }

  render() {

    return (
      <div className="App">
      <Header />
          {this.props.children}
        </div>

    );
  }
}
