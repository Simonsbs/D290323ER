function Navigation() {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://picsum.photos/id/237/30/30"
              alt="Dog logo"
              className="me-2"
            />
            My Doggie Site
          </a>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Dogs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
