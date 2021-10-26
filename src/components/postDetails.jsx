import { Component } from 'react';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.history.replace('/posts');
  }

  render() {
    return (
      <div>
        <h1>
          Post of {this.props.match.params.year}, {this.props.match.params.month}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cum
          cupiditate dicta, expedita fuga ipsam laboriosam natus nesciunt nihil nobis
          numquam obcaecati quidem recusandae vitae voluptate voluptatem. Beatae, quia.
        </p>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
        <button className="btn btn-dark mx-2" onClick={this.props.history.goBack}>
          Back
        </button>
      </div>
    );
  }
}

export default PostDetails;
