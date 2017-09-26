import React, {Component} from 'react';
import '../styles/App.css';

export default class PostAnswer extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="card-title">Post Your Answer</label>
        <form>
          <div className="form-group">
            <label className="form-text" htmlFor="answer">Answer:</label>
            <input type="textarea" className="form-control" id="answer" placeholder="Briefly describe your question/topic"/>
          </div>
          <div className="form-group">
            <input className="btn btn-secondary" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
