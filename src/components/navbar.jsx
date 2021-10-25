import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <Link className="nav-link" to="/products">
              Products
            </Link>
            <Link className="nav-link" to="/posts/2021/01">
              Posts
            </Link>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
