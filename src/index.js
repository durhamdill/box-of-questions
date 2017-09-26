import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//IMPORT COMPONENTS


import PostList from './Components/PostList.js';
import BaseLayout from './Components/Layout.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import PostDetail from './Components/PostDetail.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/post_detail' component={PostDetail} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/' component={PostList} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
