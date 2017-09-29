import React, {Component} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class PostDetail extends Component {
  constructor(props){
    super(props);
    
    this.state={
      id: props.match.params.id,
      post: [],
      answers: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

    componentDidMount(){
      let api = "https://serene-waters-86956.herokuapp.com/posts/" + this.state.id;
      console.log(api);
      fetch(api).then(results => {
            return results.json();
          }).then(data => {
            this.setState({post: data});
            this.setState({answers: data.answers})
            console.log("state", this.state.post);
          })
    }

      render(){
        return (
              <div className='container'>

                <Link to="/login">  <input className="btn btn-secondary" type="submit" value="Login" /></Link>
                <Link to="/signup">  <input className="btn btn-secondary" type="submit" value="Sign Up"/></Link>
                <Link to="/post-question"><input className="btn btn-secondary" type="submit" value="Post a Question"/></Link>

                <div className="card question">
                  <div className="card-block" key={this.state.post.id}>
                    <h4 className="card-title">{this.state.post.topic}</h4>
                    <p className="card-text">{this.state.post.body}</p>
                    <p className="card-text text-muted">User: {this.state.post.username}</p>
                  </div>
                </div>

                <div>
                  <h4 className="card-title headline">Community Answers:</h4>
                  {this.state.answers.map( (answer) => {
                    return <div className="card" key={answer.id}>
                      <div className="card-block">
                        <p>{answer.body}</p>
                        <p className="card-text text-muted">User: {answer.user}</p>
                      </div>
                      </div>
                    })}
                </div>


              </div>
        );
      }
  }

export default PostDetail;
