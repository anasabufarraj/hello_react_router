import { Component } from 'react';

class PostDetails extends Component {
  handleSave = () => {
    // Navigate to /Posts
  };

  render() {
    return (
      <div>
        <h1>
          Post of {this.props.match.params.year}, {this.props.match.params.month}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa cum cupiditate dicta,
          expedita fuga ipsam laboriosam natus nesciunt nihil nobis numquam obcaecati quidem recusandae vitae
          voluptate voluptatem. Beatae, quia.
        </p>
        <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default PostDetails;
