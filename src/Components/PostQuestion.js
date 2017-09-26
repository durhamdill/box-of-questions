import React, {Component} from 'react';
import '../styles/App.css';

export default class PostAnswer extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="card-title">Post Your Question</label>
        <form>
          <div className="form-group">
            <label className="form-text" htmlFor="topic">Topic:</label>
            <input type="text" className="form-control" id="topic" placeholder="Briefly describe your question/topic"/>
          </div>
          <div className="form-group">
            <label className="form-text" htmlFor="description">Description:</label>
            <input type="textarea" className="form-control" id="description" placeholder="Briefly describe your question/topic"/>
          </div>
          <div className="form-group">
            <input className="btn btn-secondary" type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}
