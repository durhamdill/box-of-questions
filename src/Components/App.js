import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../styles/App.css';
import registerServiceWorker from '../registerServiceWorker';
import cookie from 'react-cookies';
import request from 'superagent';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS
import PostList from './PostList.js';
import BaseLayout from './Layout.js';
import Login from './Login.js';
import Signup from './Signup.js';
import PostAnswer from './PostAnswer.js';
import PostQuestion from './PostQuestion.js';
import PostDetail from './PostDetail.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "Username",
      password:"",
      posts: [],
      token: null
    };
  }

  componentWillMount() {
    this.setState({
      token: cookie.load('token'),
      username: cookie.load('username'),
    });
}

setToken(token, username) {
    this.setState({
      token: token,
      username: username,
      isLoggedIn: true
    });
    console.log(this.state.username);
    cookie.save('token', token);
    cookie.save('username', username);
    // cookie.save('username', this.state.username);
}

removeToken(){
  console.log("removeToken");
  cookie.remove('token');
  cookie.remove('username');
  this.setState({
    token: null,
    username: null,
    isLoggedIn: false
  });
}

render() {
  let userToken = this.state.token;
  return (
    <BrowserRouter>
      <BaseLayout username={this.state.username} password={this.state.password} isLoggedIn={this.state.isLoggedIn} removeToken={this.removeToken.bind(this)} token={this.state.token}>
        <Switch>
          <Route path='/post-detail/:id' component={PostDetail} />
          <Route path='/post-question' render={(props) => ( <PostQuestion username={this.state.username} token={this.state.token}/> )} />
          <Route path='/post-answer' component={PostAnswer} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' render={(props) => ( <Login username={this.state.username} setToken={this.setToken.bind(this)} token={this.state.token}/> )}/>
          <Route path='/' component={PostList} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
    );
  }
}

export default App;
