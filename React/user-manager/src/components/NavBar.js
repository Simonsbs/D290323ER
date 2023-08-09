import React from "react";
import logo from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userName = isLoggedIn ? localStorage.getItem("userName") : "N/A";
  const nav = useNavigate();

  //   let userName;
  //   if (isLoggedIn) {
  //     userName = localStorage.getItem("userName");
  //   } else {
  //     userName = "N/A";
  //   }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    nav("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="My User Manager Site Logo"
            width={50}
            height={50}
          />
          User Manager
        </Link>
        <div className="navbar-nav">
          {isLoggedIn ? (
            <>
              <span className="navbar-text">Hello, {userName}</span>
              <button onClick={handleLogout} className="btn btn-info ms-3">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
