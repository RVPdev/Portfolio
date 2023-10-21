import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <Link to="/" className="logo anchor">
          <h2>Renato V</h2>
        </Link>

        {/* menu for easier separation */}
        <div className="menu" id="menu">
          <ul className="list">
            <li className="list-item">
              <Link className="list-link current anchor" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/blog">
                Blog
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/about">
                About
              </Link>
            </li>
            <li className="list-item">
              <Link className="list-link anchor" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* division of menu and buttons */}
        <div className="list list-right">
          <button className="btn place-items-center" id="git-btn">
            <i className="ri-github-fill git-icon"></i>
          </button>

          <button className="btn place-items-center" id="in-btn">
            <i className="ri-linkedin-box-fill in-icon"></i>
          </button>

          <button
            className="btn place-items-center screen-lg-hidden menu-toggle-icon"
            id="menu-toggle-icon"
          >
            <i className="ri-menu-3-line open-menu-icon"></i>
            <i className="ri-close-line close-menu-icon"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
