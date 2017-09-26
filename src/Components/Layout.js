import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header.js';


export default class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <div className="PostList">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}
