import React, {Component} from 'react';
import '../styles/App.css';
import PostItem from './PostItem.js';

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

              <div className="post-list" onLoad={this.fetchData}>
                {this.state.posts.map((post) => <PostItem post={post} key={post._id} />)}
              </div>


        );
      }
  }


export default PostList;
