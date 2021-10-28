import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/products">
              Products
            </NavLink>
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
            <NavLink className="nav-link" to="/queries?sortBy=asc&approved=true">
              Queries
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
