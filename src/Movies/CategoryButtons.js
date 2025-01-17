import React from "react";

function CategoryButtons({ currentCategory, onCategoryChange }) {
  const categories = ["On TV", "For Rent", "In Theaters"];

  return (
    <div className="category-buttons btn-group">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`btn btn-primary ${
            currentCategory === category ? "active" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
