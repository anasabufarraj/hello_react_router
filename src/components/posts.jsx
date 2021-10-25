function Posts(props) {
  return (
    <div>
      <h1>Posts</h1>
      <b>Date:</b> {props.match.params.month}, {props.match.params.year}
    </div>
  );
}

export default Posts;
