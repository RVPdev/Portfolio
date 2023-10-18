import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <button type="button" className="btn">
          <span className="fa fa-github git-size"></span>
        </button>
        <span className="navbar-brand">Renato Vilcahuaman</span>
        <button type="button" className="btn nav-menu">
          <span className="material-symbols-outlined">Menu</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
