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
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
          }).then(data => {
            this.setState({posts: data});
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
