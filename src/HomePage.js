import React, { useContext, useState } from "react";
import { DataContext } from "./context/DataContext";
import MoviesList from "./Movies/MoviesList";
import CategoryButtons from "./Movies/CategoryButtons";
import Header from "./Header/Header";
import MovieCard from "./Movies/MovieCard";
import PaginationComponent from "./Movies/Pagination";

function HomePage() {
  const {
    movies,
    topRated,
    loading,
    error,
    fetchMoviesByCategory,
    discoverMovies,
  } = useContext(DataContext);
  const [currentCategory, setCurrentCategory] = useState("Popular");

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    fetchMoviesByCategory(category);
  };

  return (
    <div className="home-page">
      <Header />
      {/* حالة التحميل والخطأ */}
      {loading && <p>Loading movies...</p>}
      {error && <p className="error">{error}</p>}

      {/* قائمة الأفلام */}
      {!loading && !error && (
        <div className="">
          {/* قسم الأفلام الشائعة الآن */}
          <div className="container">
            <MoviesList title="Trending Now" movies={topRated} />

            <MoviesList title="Discover Movies" movies={discoverMovies} />

            {/* قسم الأفلام الشائعة */}
            <div className="popular-section">
              <h2>
                What's Popular{" "}
                <CategoryButtons
                  currentCategory={currentCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </h2>
              <div className="movies-flex">
                {" "}
                {movies.map((movie) => (
                  <div key={movie.id || movie._id} className="movie-card">
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* pagination  */}
          <div className="container d-flex justify-content-center">
            <PaginationComponent />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
