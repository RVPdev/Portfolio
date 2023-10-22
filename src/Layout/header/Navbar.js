import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  const [active, setActive] = useState(false); // state variable in charge for scrolling down
  const [buttonActive, setButtonActive] = useState(false); //initialize state for the menu

  // Function to handle scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 15) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // function handle click

  const clickHanddler = () => {
    setButtonActive(!buttonActive);
  }

  // Adding the scroll event listener when component mounts and cleaning up when it unmounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //redirections for buttons
  const redirectToGitHub = () => {};
  const redirectToLinkedIn = () => {};

  return (
    <header className={`header ${active ? "activated" : ""}`} id="header">
      <nav className="navbar container">
        <Link to="/" className="logo anchor">
          <h2>Renato V</h2>
        </Link>

        {/* menu for easier separation */}
        <div className={`menu ${buttonActive ? "activated" : ""}`} id="menu">
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
            className={`btn place-items-center screen-lg-hidden menu-toggle-icon ${buttonActive ? "activated" : ""} `}
            id="menu-toggle-icon"
            onClick={clickHanddler}
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
