import InfoMovie from "./InfoMovie";
import React from "react";

const Movie = ({ movie, onClick }) => {
  const { title, vote_average, poster_path, original_language, release_date } =
    movie;

  return (
    <div
      className="movie-card"
      onClick={() => {
        onClick();
      }}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "./No-Poster.png"
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="./Rating.svg" alt="Star" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span> • </span>
          <p className="lang"> {original_language}</p>
          <span> • </span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
