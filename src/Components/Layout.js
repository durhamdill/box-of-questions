import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';
import cookie from 'react-cookies';
import request from 'superagent';
import Login from '../Components/Login.js';
import Signup from '../Components/Signup.js';


export default class BaseLayout extends Component {
  constructor() {
      super();
      this.state = {
        token: null
      }
    }

    componentWillMount() {
      this.setState({token: cookie.load('token')});
      console.log(cookie);
    }

    setToken(token) {
      this.setState({token: token});
      cookie.save('token', token);
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
