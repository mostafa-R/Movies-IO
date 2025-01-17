import React from "react";

function NavList() {
  return (
    <div
      className="collapse navbar-collapse justify-content-center align-items-center"
      id="navbarNavDarkDropdown"
    >
      <ul className="navbar-nav">
        <li className="nav-item dropdown ms-1">
          <div className="dropdown-hover">
            <button
              className="btn btn-dark dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              افلام
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="/">
                  افلام اجنبي
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  افلام عربي
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item dropdown ms-1">
          <div className="dropdown-hover">
            <button
              className="btn btn-dark dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              مسلسلات
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="/">
                  مسلسلات احنبي
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  مسلسلات عربي
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item dropdown ms-1">
          <div className="dropdown-hover">
            <button
              className="btn btn-dark dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              تصنيف افلام
            </button>
          </div>
        </li>
        <li className="nav-item dropdown ms-1">
          <div className="dropdown-hover">
            <button
              className="btn btn-dark dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              برامج تليفزيونيه
            </button>
          </div>
        </li>
        <li className="nav-item dropdown"></li>
      </ul>
    </div>
  );
}

export default NavList;
