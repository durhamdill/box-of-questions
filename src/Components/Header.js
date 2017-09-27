import React, {Component} from 'react';
import '../styles/App.css';
// import logo from "../styles/logo.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src="https://durhamdill.files.wordpress.com/2017/09/logo.png" alt="logo"/>
        <h1> Box of Questions</h1>
      </header>
    )
  }
}


export default Header;
