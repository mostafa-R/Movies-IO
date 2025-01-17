import React from "react";
import MoviesCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function MoviesList({ title, movies }) {
  if (!movies.length) {
    return <p>No movies available at the moment.</p>;
  }

  return (
    <div className="movies-carousel">
      <div className="container">
        <h1>{title}</h1>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id || movie._id}>
            <MoviesCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MoviesList;
