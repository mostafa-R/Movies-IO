import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

function Search() {
  const { searchMovies } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm.trim());
  };

  return (
    <div className="container mt-5 search-container">
      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center"
        role="search"
      >
        <input
          value={searchTerm}
          onChange={handleInputChange}
          className="form-control"
          type="search"
          placeholder="Search for movies..."
          aria-label="Search"
        />
        <button className="btn btn-primary ms-2" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
