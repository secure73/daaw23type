import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid bg-white sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0">
          <img className="img-fluid" src="img/logo.png" alt="Logo" />
          <div className="navbar-nav ms-auto">
            <ul className="breadcrumb justify-content-center mb-0">
              <Link to="/" className="nav-item nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/Login" className="nav-item nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-item nav-link">
                Register
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
