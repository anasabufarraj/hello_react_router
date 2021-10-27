import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul>
      <li>
        <Link to="/admin/users">Users</Link>
      </li>
      <li>
        <Link to="/admin/articles">Articles</Link>
      </li>
    </ul>
  );
}

export default Sidebar;
