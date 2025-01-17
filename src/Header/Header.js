import React from "react";
import Search from "./Search";
import Line from "../Movies/Line";
function Header() {
  return (
    <>
      <div className="Header d-flex justify-content-center align-items-center">
        <h1>Unlimited movies, TV shows, and more</h1>
        <Search />
      </div>
      <>
        <Line />
      </>
    </>
  );
}

export default Header;
