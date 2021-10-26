import queryString from 'query-string';

function Queries({ location }) {
  let query = queryString.parse(location.search);
  console.log(query.sortBy);
  console.log(query.approved);

  return (
    <div>
      <h1>Query Strings</h1>
    </div>
  );
}

export default Queries;
