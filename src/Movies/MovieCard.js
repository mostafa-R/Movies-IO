import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie._id || movie.id}`} className="MovieCard">
      <div className="movie-card ">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.name}
          className="movie-poster"
        />
        <div className="movie-info">
          <h3>{!movie.name ? movie.original_title : movie.name}</h3>
          <p>
            {!movie.release_date ? movie.first_air_date : movie.release_date}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
