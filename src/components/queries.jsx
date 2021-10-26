import queryString from 'query-string';

function Queries({ location }) {
  let query = queryString.parse(location.search);
  console.log(query);

  return (
    <div>
      <h1>Query Strings</h1>
    </div>
  );
}

export default Queries;
