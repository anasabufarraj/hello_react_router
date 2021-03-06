import React from 'react';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  state = {
    posts: [
      { id: 1, year: 2021, month: 'June' },
      { id: 2, year: 2019, month: 'April' },
      { id: 3, year: 2018, month: 'June' },
    ],
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.month}/${post.year}`}>
                {post.month}, {post.year}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
