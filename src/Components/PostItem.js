import React from 'react';
import {Link} from 'react-router-dom';


const PostItem = ({post}) => (

<div className="card">
  <div className="card-block" key={post.id}>
    <Link to={`/post-detail/${post.id}`} id={post.id}><h4 className="card-title">Topic: {post.topic}</h4></Link>
    <p className="card-text">Description: {post.body}</p>
  </div>
</div>

);


export default PostItem;
