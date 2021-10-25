function NavBar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="/products">
              Products
            </a>
            <a className="nav-link" href="/posts/2021/01">
              Posts
            </a>
            <a className="nav-link" href="/admin">
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
