import React, {Component} from 'react';
import '../styles/App.css';
import request from 'superagent';

export default class PostAnswer extends Component {
  constructor() {
    super();
    this.state = {
      body: '',
      error: ''
    }
  }
  updateAddAnswer(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }
    addAnswer(event) {
      console.log(this.state);

    event.preventDefault();
      request
        .post("https://serene-waters-86956.herokuapp.com/posts")
        .send({post: {topic: this.state.topic, body: this.state.body}})
        .end((err, res) => {
          if (err) {
            console.log("error");
          } else {
            console.log("success");
          }
        })
      }

  render() {
    return (
      <div className="form-group">
        <label className="card-title">Post Your Answer</label>
        <form>
          <div className="form-group">
            <label className="form-text" htmlFor="answer">Answer:</label>
            <textarea  rows="10" cols="50" className="form-control" id="answer" placeholder="Enter your answer here" onChange={this.updateAddAnswer('body')} value={this.state.body}/>
          </div>
          <div className="form-group">
            <input className="btn btn-secondary" type="submit" value="Post Your Answer"/>
          </div>
        </form>
      </div>
    )
  }
}
