import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movie, getMovieDetails, loading, error } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id);
  }, [getMovieDetails, id]);

  if (loading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie details available.</p>;

  const {
    poster_path,
    original_title,
    release_date,
    runtime,
    genres = [],
    overview,
    vote_average,
    vote_count,
    tagline,
    backdrop_path,
    homepage,
    origin_country,
    name,
  } = movie;

  return (
    <div
      className="movie-details-container container-background mt-4 container"
      style={{
        backgroundImage: backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
          : "none",
        height: "auto",
      }}
    >
      <div className="movie-content">
        <div className="movie-poster-details">
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
          ) : (
            <p>No poster available</p>
          )}
        </div>
        <div className="movie-details ms-5">
          <h1 className="movie-title">
            {original_title || name}{" "}
            {release_date && <span>({release_date.split("-")[0]})</span>}
          </h1>
          <p className="movie-meta">
            {release_date || "Unknown release date"}{" "}
            {origin_country ? `(${origin_country})` : ""}•{" "}
            {runtime ? `${runtime} min` : "Unknown runtime"} •{" "}
            {genres.length > 0
              ? genres.map((genre) => genre.name).join(", ")
              : "No genres available"}
          </p>

          {tagline && <p className="movie-tagline">{tagline}</p>}
          <p className="movie-overview-title">Overview</p>
          <p className="movie-overview">
            {overview || "No overview available"}
          </p>
          <p className="movie-votes">
            ⭐ {vote_average || "N/A"} / 10 ({vote_count || 0} votes)
          </p>

          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary me-3 mt-1"
            >
              Official Website
            </a>
          )}
          <Link
            className="btn btn-outline-secondary me-3 mt-1"
            to={`/movie/watch/${id}`}
          >
            Watch Now
          </Link>
          <Link className="btn btn-outline-secondary mt-1" to="/">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
