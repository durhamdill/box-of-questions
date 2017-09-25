import React, { Component } from 'react';
import '../styles/App.css';
import PostList from './PostList.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="PostList">
          <Header />
          <PostList />
        </div>
      </div>
    );
  }
}

export default App;
