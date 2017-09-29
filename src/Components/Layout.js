import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';


export default class BaseLayout extends Component {
  constructor(props) {
      super(props);
      this.state = {

      }
    }

  render() {

    return (
      <div>
      <Header username={this.props.username} password={this.props.password} isLoggedIn={this.props.isLoggedIn} removeToken={this.props.removeToken.bind(this)} token={this.props.token}/>
          {this.props.children}
        </div>

    );
  }
}
