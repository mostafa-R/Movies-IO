import React from "react";

function MovieWatch({ videoUrl }) {
  return (
    <div className="container movie-watch-card">
      <h1>Watch Movie</h1>
      <div className="video-watch">
        <iframe
          className="video-frame"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          title="Movie Video"
          style={{ width: "100%", height: "500px" }}
        ></iframe>
      </div>
    </div>
  );
}

export default MovieWatch;
