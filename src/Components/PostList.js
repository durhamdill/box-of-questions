import React, {Component} from 'react';
import '../styles/App.css';
import PostItem from './PostItem.js';
import {Link} from 'react-router-dom';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state={
      posts: []
    }


  }


    componentDidMount(){
      fetch('https://serene-waters-86956.herokuapp.com/posts/').then(results => {
            return results.json();
          }).then(data => {
            this.setState({posts: data.posts});
            console.log("state", this.state.posts);
          })
    }

      render(){
        return (
              <div className='container'>
              <Link to="/login">  <input className="btn btn-secondary" type="submit" value="Login" /></Link>
              <Link to="/signup">  <input className="btn btn-secondary" type="submit" value="Sign Up"/></Link>
                <input className="btn btn-secondary" type="submit" value="Post a Question"/>
                <div className="post-list" onLoad={this.fetchData}>
                  {this.state.posts.map((post) => <PostItem post={post} key={post._id} />)}
                </div>
              </div>

        );
      }
  }


export default PostList;
