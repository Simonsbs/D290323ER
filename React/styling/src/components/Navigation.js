import "./Navigation.css";

function Navigation() {
  return (
    <header className="mb-3">
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://picsum.photos/id/237/30/30"
              alt="Dog logo"
              className="me-2 rounded"
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
      <nav>
        <div className="container mt-2">
          <ol className="breadcrumb bc-icon">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Breeds</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Gender</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#">A Dog</a>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
