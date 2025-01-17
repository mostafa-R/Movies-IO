import React from "react";

import NavList from "./NavList";

function NavBar() {
  return (
    <div dir="rtl">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand me-5" href="/">
            MOVIES IO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavList />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
