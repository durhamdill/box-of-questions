import React, {Component} from 'react';
import '../styles/App.css';
import request from 'superagent';

export default class PostQuestion extends Component {
  constructor() {
    super();
    this.state = {
      topic: '',
      body: '',
      error: ''
    }
  }
updateAddQuestion(stateKey) {
  return (event) => {
    this.setState({[stateKey]: event.target.value});
  }
}


addQuestion(event) {
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
      {this.state.error && <div className='alert'>{this.state.error}</div>}
        <label className="card-title">Post Your Question</label>
        <form>
          <div className="form-group">
            <label className="form-text" htmlFor="topic">Topic:</label>
            <input type="text" className="form-control" id="topic" placeholder="Briefly describe your question/topic" onChange={this.updateAddQuestion('topic')} value={this.state.topic}/>
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="description">Description:</label>
            <input type="textarea" className="form-control" id="body" placeholder="Explain your issue in detail" onChange={this.updateAddQuestion('body')} value={this.state.body}/>
          </div>
          <div className="form-group">
            <input className="btn btn-secondary" type="submit" value="Submit" onClick={event => this.addQuestion(event)}/>
          </div>
        </form>
      </div>
    )
  }
}
